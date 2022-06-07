import Addition from "./addition.js";
import Division from "./division.js";
import Exponentiation from "./exponentiation.js";
import Multiplication from "./multiplication.js";
import { OperationEnum } from "./operation-enum.js";
import SquareRoot from "./square-root.js";
import Subtraction from "./subtraction.js";

/**
 * @class OperationsLookupFactory
 * @description Factory used to return the implementing logic for various mathematical operations
 */
export const OperationsLookupFactory = {
    /**
     * Finds the implementation of the operational logic for a given symbol
     * @param {String} operation Symbol for the mathematical operation
     * @returns Object of the associated implementation class
     */
    findOperationImplementation: (operation) => {
        switch (operation) {
            case OperationEnum.ADDITION:
                return new Addition()
            case OperationEnum.SUBTRACTION:
                return new Subtraction()
            case OperationEnum.MULTIPLICATION:
                return new Multiplication()
            case OperationEnum.DIVISION:
                return new Division()
            case OperationEnum.EXPONENTIATION:
                return new Exponentiation()
            case OperationEnum.SQUARE_ROOT:
                return new SquareRoot()
            default:
                break;
        }
    }
}
