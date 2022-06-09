import { OperationEnum } from "./operations/operation-enum.js";
import { OperationValidator } from "./common/validators/operator-validator.js";
import InvalidInputError from "./common/errors/invalid-input-error.js";
import { SpecialCharacterEnum } from "./operations/special-chatacter-enum.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const PLACE_HOLDER = "PLACE_HOLDER"
const SUB_EXPRESSION_REGEX = /\(.*\)/g

/**
 * Calculates the evaluated result of an expression to a given precision
 * @param {String} expression Mathematical expression
 * @param {Number} decimalPrecision Number of decimals
 * @returns {Number} Evaluated result of the expression
 */
export const calculateResult = (expression, decimalPrecision) => {
    let results = []
    let expressions = []
    expressions.push(expression)

    while (expressions.length > 0) {
        let currentExpression = expressions.pop()
        if (containsSubExpression(currentExpression)) {
            processCompoundExpression(currentExpression, expressions)
        } else if (containsPlaceholder(currentExpression)) {
            processExpressionWithPlaceHolder(currentExpression, expressions, results)
        } else {
            let result = evaluateExpression(currentExpression)
            results.push(result)
        }
    }

    let finalResult = results.pop()
    return finalResult.toFixed(decimalPrecision)
}

/**
 * Checks whether an expression contains a place-holder that serves
 * as a variable that represents the evaluated value of a sub-expression
 * @param {String} expression Mathematical expression
 * @returns True if it contains a place holder variable. False otherwise
 */
const containsPlaceholder = (expression) => {
    return expression.includes(PLACE_HOLDER)
}

/**
 * Process an expression that contains a place-holder that serves
 * as a variable that represents the evaluated value of a sub-expression.
 * 
 * @param {String} expression Mathematical expression with the place-holder variable
 * @param {Array} expressions Collection of expressions to be evaluated
 * @param {Array} results Collection of results from evaluated expressions
 */
const processExpressionWithPlaceHolder = (expression, expressions, results) => {
    let recentResult = results.pop()
    expression = expression.replace(PLACE_HOLDER, recentResult)
    expressions.push(expression)
}

/**
 * Processes expressions that contain one or more sub-expressions (i.e. an expression in parentheses)
 * @param {String} expression Compound expression (i.e. one or more sub-expressions)
 * @param {Array} expressions Collection of expressions to be evaluated
 */
const processCompoundExpression = (expression, expressions) => {
    
    let subExpression = extractSubExpresssion(expression)
    let formattedExpression = replaceSubExpression(expression)

    expressions.push(formattedExpression.trim())
    expressions.push(subExpression.trim())
    
}

const findPrimarySubExpression = (compoundExpression) => {
    return compoundExpression.match(SUB_EXPRESSION_REGEX).shift()
}
const extractSubExpresssion = (compoundExpression) => {
    let primarySubExpression = findPrimarySubExpression(compoundExpression)
    primarySubExpression = primarySubExpression.substring(1, primarySubExpression.length - 1)
    return primarySubExpression
    
}

const replaceSubExpression = (compoundExpression) => {
    let primarySubExpression = findPrimarySubExpression(compoundExpression)
    return compoundExpression.replace(primarySubExpression, PLACE_HOLDER)
}

/**
 * Checks whether an expression contains a sub-expression (i.e. an expression in parentheses)
 * @param {String} expression Mathematical expression
 * @returns {Boolean} True if the expression contains a sub-expression. False otherwise
 */
const containsSubExpression = (expression) => {
    return expression.includes(SpecialCharacterEnum.OPEN_BRACKET.symbol) || expression.includes(SpecialCharacterEnum.CLOSING_BRACKET.symbol)
}

/**
 * Evaluates an expression that contains no sub-expressions (i.e. expressions in parentheses)
 * @param {String} expression Mathematical expression
 * @returns Evaluated result of the expression
 */
const evaluateExpression = (expression) => {
    let result = 0;

    const expressionArray = createArrayOfElementsInExpression(expression) 

    let numbers = [];
    let operations = [];

    expressionArray.forEach((element) => {
        if (!isNaN(element)) {
            processNumber(element, numbers, operations)
        } else if (OperationValidator.isOperation(element)) {
            processOperation(element, operations)
        } else {
            throw new InvalidInputError(`Invalid input '${element}' detected in the calculation`)
        }
    })

    result = numbers.shift();
    while (numbers.length > 0) {
        let operation = operations.shift();
        let nextOperand = numbers.shift();
        result = operation.execute(result, nextOperand);
    }

    return result;
}

const processNumber = (numbericalString, numbers, operations) => {
    let number = Number(numbericalString)
    while (operations.length > 0) {
        let recentOperation = operations.pop()
        if (recentOperation.arity == 1) {
            number = recentOperation.execute(number)
        }
        else if (recentOperation == OperationEnum.ADDITION || recentOperation == OperationEnum.SUBTRACTION) {
            operations.push(recentOperation)
            break;
        } else {
            let recentNumber = numbers.pop()
            number = recentOperation.execute(recentNumber, number)
        }
    }

    numbers.push(number)
}

const createArrayOfElementsInExpression = (expression) => {
    return expression.split(" ")
}

const processOperation = (operationString, operations) => {
    for (let operationName in OperationEnum) {
        let operation = OperationEnum[operationName]
        if (operation.symbol == operationString) operations.push(operation)
    }
}