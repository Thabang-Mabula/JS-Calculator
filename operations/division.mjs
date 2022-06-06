import NumericalError from '../common/errors/numerical-error.mjs'
import BinaryOperator from "./binary-operator.mjs";

/**
 * @class Division
 * @description Class that implements the logic for addition
 */
export default class Division extends BinaryOperator {
    execute(firstOperand, secondOperand) {
        if (secondOperand == 0) throw new NumericalError("Cannot divide by zero")

        return firstOperand / secondOperand;
    }
}