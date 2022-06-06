import BinaryOperator from "./binary-operator.mjs";

/**
 * @class Exponentiation
 * @description  Class that implements the logic for exponentiation
 */
export default class Exponentiation extends BinaryOperator {
    /**
     * Raises the first operand to the power of the second operand
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns {Number} First operand raised to the power of the second operand
     */
    execute(firstOperand, secondOperand) {
        return Math.pow(firstOperand, secondOperand)
    }
}