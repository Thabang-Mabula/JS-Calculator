import {Queue, Stack} from "./data-structures.mjs";
import { Dequeue } from "./data-structures/dequeue.mjs";
import Addition from "./operations/addition.mjs";
import Subtraction from "./operations/subtraction.mjs";
import {OperationsLookupFactory} from "/operations.mjs";

const calculateResult = (expression) => {
    const expressionArray = expression.split(" ")
    let result = 0;
    let numbers = new Dequeue();
    let operations = new Dequeue();

    for (let i = 0; i < expressionArray.length; i++) {
        // Numbers will be in even indexes, whilst operations will be in odd indexes
        let stringElement = expressionArray[i];
        if (i % 2 == 0)  {
            processNumber(stringElement, numbers, operations)
        } else {
            processOperation(stringElement, operations)
        }
    }

    result = numbers.popBack();
    while(!numbers.isEmpty()) {
        let operation = operations.popBack(); 
        let nextOperand = numbers.popBack();
        result = operation.execute(result, nextOperand);
    }

    return result;
}

const processNumber = (numbericalString, numberQueue, operationQueue,) => {
    let number = Number(numbericalString)
    if (numberQueue.size() > 0 ) {
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

export {calculateResult}
export * from './script.mjs'