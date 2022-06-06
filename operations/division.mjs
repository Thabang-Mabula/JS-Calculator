import BinaryOperator from "./binary-operator.mjs";
import NumericalError from '../common/errors/numerical-error.mjs'

export default class Division extends BinaryOperator {
    execute(firstOperand, secondOperand) {
        if (secondOperand == 0) throw new NumericalError("Cannot divide by zero")

        return firstOperand / secondOperand;
    }
}