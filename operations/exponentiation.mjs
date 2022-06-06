import BinaryOperator from "./binary-operator.mjs";

export default class Exponentiation extends BinaryOperator {
    execute(operand1, operand2) {
        return Math.pow(operand1, operand2)
    }
}