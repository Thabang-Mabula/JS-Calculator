import Addition from "./addition.mjs";
import Division from "./division.mjs";
import Exponentiation from "./exponentiation.mjs";
import Multiplication from "./multiplication.mjs";
import { OperationEnum } from "./operation-enum.mjs";
import Subtraction from "./subtraction.mjs";

export const OperationsLookupFactory = {
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
            default:
                break;
        }
    }
}
