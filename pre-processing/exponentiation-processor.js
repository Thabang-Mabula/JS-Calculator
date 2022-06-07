import ExpressionProcessor from "./expression-processor.js"
import { OperationEnum } from "../operations/operation-enum.js";

const EXPONENTIATION_REGEX = /\d\s\^\s\d/g

/**
 * @class ExponentiationProcessor
 * @description Processes an expression containing an exponent by
 *              adding brackets around the numbers on which the operator
 *              operates. This assists with maintaining the "Order of Operations"
 *              when the expression is being evaluated
 */
export default class ExponentiationProcessor extends ExpressionProcessor {
    /**
     * Processes the expression by adding brackets by
     * adding brackets around the numbers on which the operator operates. 
     * 
     * E.g. x ^ y  will become (x ^ y)
     * 
     * @param {String} expression Mathematical expression
     * @returns Formatted mathematical expression
     */
    processExpression(expression) {
        const exponentTerms = [...expression.matchAll(EXPONENTIATION_REGEX)]
        exponentTerms.forEach((exponentTerm) => {
            expression = expression.replace(exponentTerm, OperationEnum.OPEN_BRACKET + " " + exponentTerm + " " + OperationEnum.CLOSING_BRACKET)
        })

        return expression
    }

    /**
     * Checks whether a given expression contains an exponent symbol
     * @param {String} expression Mathematical expression
     * @returns True if the given expression contains an exponent symbol. False otherwise.
     */
    isProcessingRequired(expression) {
        return expression.includes(OperationEnum.EXPONENTIATION)
    }
}