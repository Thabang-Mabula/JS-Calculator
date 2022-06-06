import Stack from "./data-structures/stack.mjs";
import Deque from "./data-structures/deque.mjs";
import Addition from "./operations/addition.mjs";
import { OperationEnum } from "./operations/operation-enum.mjs";
import Subtraction from "./operations/subtraction.mjs";
import UnitaryOperator from "./operations/unitary-operator.mjs";
import { OperationsLookupFactory } from "./operations/operations-lookup-factory.mjs";
import { NumberValidator } from "./common/validators/number-validator.mjs";
import { OperationValidator } from "./common/validators/operator-validator.mjs";
import InvalidInputError from "./common/errors/invalid-input-error.mjs";

const PLACE_HOLDER = "PLACE_HOLDER"

const calculateResult = (expression) => {
    let results = new Stack()
    let expressions = new Stack()
    expressions.push(expression)

    while (!expressions.isEmpty()) {
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
    return finalResult
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
    let startIndex = exp.indexOf(OperationEnum.OPEN_BRACKET)
    let endIndex = 0
    for (let i = startIndex + 1; i < exp.length; i++) {
        let currentChar = exp.charAt(i)
        if (currentChar == OperationEnum.OPEN_BRACKET) {
            i = exp.indexOf(OperationEnum.CLOSING_BRACKET, i)
        } else if (currentChar == OperationEnum.CLOSING_BRACKET) {
            endIndex = i
        }
    }

    let subExpression = extractSubExpresssion(startIndex, endIndex, exp)
    let formattedExpression = replaceSubExpression(startIndex, endIndex, exp)

    expressions.push(formattedExpression.trim())
    expressions.push(subExpression.trim())
}

const extractSubExpresssion = (startingBracketPosition, endingBracketPosition, compoundExpression) => {
    return compoundExpression.substring(startingBracketPosition + 1, endingBracketPosition)
}

const replaceSubExpression = (startingBracketPosition, endingBracketPosition, compoundExpression) => {
    let subExpressionWithBrackets = compoundExpression.substring(startingBracketPosition, endingBracketPosition + 1)
    return compoundExpression.replace(subExpressionWithBrackets, PLACE_HOLDER)
}

const containsSubExpression = (expression) => {
    for (let c of expression) {
        if (c == OperationEnum.OPEN_BRACKET) return true
    }

    return false
}

const evaluateExpression = (expression) => {
    let result = 0;

    const expressionArray = expression.split(" ")

    let numbers = new Deque();
    let operations = new Deque();

    for (let i = 0; i < expressionArray.length; i++) {
        let stringElement = expressionArray[i];

        if (NumberValidator.isNumber(stringElement)) {
            processNumber(stringElement, numbers, operations)
        } else if (OperationValidator.isOperation(stringElement)) {
            processOperation(stringElement, operations)
        } else {
            throw new InvalidInputError(`Invalid input '${stringElement}' detected in the calculation`)
        }
    }

    result = numbers.popFront();
    while (!numbers.isEmpty()) {
        let operation = operations.popFront();
        let nextOperand = numbers.popFront();
        result = operation.execute(result, nextOperand);
    }

    return result;
}

const processNumber = (numbericalString, numberQueue, operationQueue,) => {
    let number = Number(numbericalString)
    if (!operationQueue.isEmpty()) {
        let recentOperation = operationQueue.popBack()
        if (recentOperation instanceof UnitaryOperator) {
            number = recentOperation.execute(number)
        }
        else if ((recentOperation instanceof Addition || recentOperation instanceof Subtraction)) {
            operationQueue.pushBack(recentOperation)
        } else {
            let recentNumber = numberQueue.popBack()
            number = recentOperation.execute(recentNumber, number)
        }
    }

    numberQueue.pushBack(number)
}

const processOperation = (operationString, operationQueue) => {
    let operation = OperationsLookupFactory.findOperationImplementation(operationString)
    operationQueue.pushBack(operation)
}

export { calculateResult }
export * from './script.mjs'