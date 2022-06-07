import PrimaryBinaryOperator from "./primary-binary-operator.mjs";

/**
 * @class Addition
 * @description Class that implements the logic for addition
 */
export default class Addition extends PrimaryBinaryOperator {

    /**
     * Calculates the sum of the given operands
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns {Number} Sum of the operands
     */
    execute(firstOperand, secondOperand) {
        return firstOperand + secondOperand
    }
}
