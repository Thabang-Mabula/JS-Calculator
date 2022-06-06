import BinaryOperator from "./binary-operator.mjs";

export default class Multiplication extends BinaryOperator {
    execute(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }
}