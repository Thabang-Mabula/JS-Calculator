import { Queue, Stack } from "./data-structures.mjs";
import { Dequeue } from "./data-structures/dequeue.mjs";
import Addition from "./operations/addition.mjs";
import { OperationEnum } from "./operations/operation-enum.mjs";
import Subtraction from "./operations/subtraction.mjs";
import { OperationsLookupFactory } from "/operations.mjs";

const calculateResult = (expression) => {
    let results = new Stack()
    let expressions = new Stack()
    expressions.push(expression)

    while (!expressions.isEmpty()) {
        let currentExpression = expressions.pop()
        if (containsSubExpression(currentExpression)) {
            processCompoundExpression(currentExpression, expressions)
        } else {
            let result = evaluateExpression(currentExpression)
            results.push(result)
        }
    }

    let finalResult = results.pop()
    return finalResult
}

const processCompoundExpression = (exp, expressions) => {
    let startIndex = exp.indexOf(OperationEnum.OPEN_BRACKET)
    let endIndex = 0
    for (let i = startIndex; i < exp.length; i++) {
        let currentChar = exp.charAt(i)
        if (currentChar == OperationEnum.OPEN_BRACKET) {
            i = exp.indexOf(OperationEnum.CLOSING_BRACKET, i)
        } else if (currentChar == OperationEnum.CLOSING_BRACKET) {
            endIndex = i
        }
    }

    let subExpression = extractSubExpresssion(startIndex, endIndex, exp)
    let formattedExpression = replaceSubExpression(startIndex, endIndex, exp)

    expressions.push(formattedExpression)
    expressions.push(subExpression)
}

const containsSubExpression = (expression) => {
    for (let c of expression) {
        if (c == OperationEnum.OPEN_BRACKET) return true
    }

    return false
}

const evaluateExpression = (expression) => {
    let result = 0;

    while (hasSubExpressions(expression)) {
        Q
    }

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