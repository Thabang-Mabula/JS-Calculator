import BinaryOperator from "./binary-operator.mjs";

export default class Subtraction extends BinaryOperator {
    execute(firstOperand, secondOperand) {
        return firstOperand - secondOperand
    }
}