import ExponentiationProcessor from "./exponentiation-processor.js";

/**
 * @constant ExpressionPreProcessors
 * @description Collection of all the pre-processors that need to be applied 
 *              to an expression before it is evaluated
 */
export const ExpressionPreProcessors = [
    new ExponentiationProcessor()
]