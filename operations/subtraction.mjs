import PrimaryBinaryOperator from "./binary-operator.mjs";

/**
 * @class Subtraction
 * @description Class that implements the logic for subtraction
 */
export default class Subtraction extends PrimaryBinaryOperator {

    /**
     * Calcualtes the difference between two given operands
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns Difference between the two given operands (i.e. first operand - second operand)
     */
    execute(firstOperand, secondOperand) {
        return firstOperand - secondOperand
    }
}