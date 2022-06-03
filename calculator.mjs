import { Queue, Stack } from "./data-structures.mjs";
import { Dequeue } from "./data-structures/dequeue.mjs";
import Addition from "./operations/addition.mjs";
import { OperationEnum } from "./operations/operation-enum.mjs";
import Subtraction from "./operations/subtraction.mjs";
import { OperationsLookupFactory } from "/operations.mjs";

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
    // let firstPartOfRemainingExpression = compoundExpression.substring(0, startingBracketPosition)
    // lastIndexOfOriginalExpression = compoundExpression.length - 1
    // let lastPartOfRemainingExpression = endingBracketPosition < lastIndexOfOriginalExpression? compoundExpression.substring(endingBracketPosition + 1) : ""
    // return firstPartOfRemainingExpression + PLACE_HOLDER + lastPartOfRemainingExpression
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

    let numbers = new Dequeue();
    let operations = new Dequeue();

    for (let i = 0; i < expressionArray.length; i++) {
        // Numbers will be in even indexes, whilst operations will be in odd indexes
        let stringElement = expressionArray[i];
        if (i % 2 == 0) {
            processNumber(stringElement, numbers, operations)
        } else {
            processOperation(stringElement, operations)
        }
    }

    result = numbers.popBack();
    while (!numbers.isEmpty()) {
        let operation = operations.popBack();
        let nextOperand = numbers.popBack();
        result = operation.execute(result, nextOperand);
    }

    return result;
}

const processNumber = (numbericalString, numberQueue, operationQueue,) => {
    let number = Number(numbericalString)
    if (numberQueue.size() > 0) {
        let recentOperation = operationQueue.peekBack()
        if (!(recentOperation instanceof Addition || recentOperation instanceof Subtraction)) {
            operationQueue.popBack()
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