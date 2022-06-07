import BinaryOperator from "./binary-operator.mjs";

/**
 * @class Multiplication
 * @description Class that implements the logic for multiplication
 */
export default class Multiplication extends BinaryOperator {
    /**
     * Calculates the product of the two operands
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns Product of the two operands
     */
    execute(firstOperand, secondOperand) {
        return firstOperand * secondOperand;
    }
}