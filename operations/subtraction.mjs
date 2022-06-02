import { Operation } from "./operation.mjs";

export default class Subtraction extends Operation {
    execute(firstOperand, secondOperand) {
        return firstOperand - secondOperand
    }
}