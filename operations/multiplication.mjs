import { Operation } from "./operation.mjs";

export default class Multiplication extends Operation {
    execute(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }
}