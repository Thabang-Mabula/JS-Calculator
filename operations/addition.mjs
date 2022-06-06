import BinaryOperator from "./binary-operator.mjs";

export default class Addition extends BinaryOperator {
    execute(operand1, operand2) {
        return operand1 + operand2
    }
}
