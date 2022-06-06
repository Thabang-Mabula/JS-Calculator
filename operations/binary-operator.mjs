/**
 * @class BinaryOperator
 * @description Class that acts as an interface for the implementation of binary operators (i.e. operators that operate on two operands)
 * 
 */
export default class BinaryOperator {
    /**
     * Constructor
     */
    constructor() { }

    /**
     * Executes the operation on the operands
     * @param {Number} firstOperand First operand
     * @param {Number} secondOperand Second operand
     * @returns {Number} Result of the calculation
     */
    execute(firstOperand, secondOperand) { }
}