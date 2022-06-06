import UnitaryOperator from "./unitary-operator.mjs";

/**
 * @class Multiplication
 * @description Class that implements the logic for calculating the square-root of a given number
 */
export default class SquareRoot extends UnitaryOperator {
    /**
     * Calculates the square-root of a given operand
     * @param {Number} operand operand
     * @returns {Number} Square-root of the given operand
     */
    execute(operand) {
        return Math.sqrt(operand)
    }
}