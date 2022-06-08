import { OperationEnum } from "./operations/operation-enum.js";
import { OperationValidator } from "./common/validators/operator-validator.js";
import InvalidInputError from "./common/errors/invalid-input-error.js";
import { SpecialCharacterEnum } from "./operations/special-chatacter-enum.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const PLACE_HOLDER = "PLACE_HOLDER"
const SUB_EXPRESSION_REGEX = /\(.*\)/g

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

const containsPlaceholder = (expression) => {
    return expression.includes(PLACE_HOLDER)
}

const processExpressionWithPlaceHolder = (expression, expressions, results) => {
    let recentResult = results.pop()
    expression = expression.replace(PLACE_HOLDER, recentResult)
    expressions.push(expression)
}

const processCompoundExpression = (exp, expressions) => {
    
    let subExpression = extractSubExpresssion(exp)
    let formattedExpression = replaceSubExpression(exp)

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

const containsSubExpression = (expression) => {
    return expression.includes(SpecialCharacterEnum.OPEN_BRACKET.symbol) || expression.includes(SpecialCharacterEnum.CLOSING_BRACKET.symbol)
}

const evaluateExpression = (expression) => {
    let result = 0;

    const expressionArray = createArrayOfElementsInExpression(expression) 

    let numbers = [];
    let operations = [];

    for (let i = 0; i < expressionArray.length; i++) {
        let stringElement = expressionArray[i];

        if (!isNaN(stringElement)) {
            processNumber(stringElement, numbers, operations)
        } else if (OperationValidator.isOperation(stringElement)) {
            processOperation(stringElement, operations)
        } else {
            throw new InvalidInputError(`Invalid input '${stringElement}' detected in the calculation`)
        }
    }

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
    if (operations.length > 0) {
        let recentOperation = operations.pop()
        if (recentOperation.arity == 1) {
            number = recentOperation.execute(number)
        }
        else if (recentOperation == OperationEnum.ADDITION || recentOperation == OperationEnum.SUBTRACTION) {
            operations.push(recentOperation)
        } else {
            let recentNumber = numbers.pop()
            number = recentOperation.execute(recentNumber, number)
        }
    }

    numbers.push(number)
}

const createArrayOfElementsInExpression = (expression) => {
    return [...expression].filter((character) => {
        return character != " "
    })
}

const processOperation = (operationString, operations) => {
    for (let operationName in OperationEnum) {
        let operation = OperationEnum[operationName]
        if (operation.symbol == operationString) operations.push(operation)
    }
}