import BinaryOperator from "./binary-operator.mjs"

/**
 * @class PrimaryBinaryOperator
 * @description Class that acts an interface for primary binary operators. 
 *              This refers to operators that are used to seperate terms (e.g. addition and substraction).
 *              As such, they have the lowest precendence in the "Order of Operations" 
 */
export default class PrimaryBinaryOperator extends BinaryOperator {
     /**
     * Executes the operation on the operands
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns {Number} Result of the calculation
     */
    execute(firstOperand, secondOperand) {}
}