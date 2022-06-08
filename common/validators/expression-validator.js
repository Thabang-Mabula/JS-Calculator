import { SpecialCharacterEnum } from "../../operations/special-chatacter-enum.js"
import InvalidInputError from "../errors/invalid-input-error.js"


/**
 * @constant ExpressionValidator
 * @description Validates the expression and throws an error if any invalid conditions are detected
 */
export const ExpressionValidator = {
    /**
     * Validates the expression and throws an error if any invalid conditions are detected
     * @param {String} expression
     */
    validate: (expression) => {
        if (expression.includes(SpecialCharacterEnum.OPEN_BRACKET.symbol) || expression.includes(SpecialCharacterEnum.CLOSING_BRACKET.symbol)) {
            validateParentheses(expression) 
        }
    }
}

/**
 * Validates that all brackets/parentheses are balanced
 * @param {String} expression 
 */
const validateParentheses = (expression) => {
    let numberOfOpenBrackets = expression.match(SpecialCharacterEnum.OPEN_BRACKET.regex).length
    let numberOfClosedBrackets = expression.match(SpecialCharacterEnum.CLOSING_BRACKET.regex).length

    if (numberOfOpenBrackets != numberOfClosedBrackets) throw new InvalidInputError("The expression contains unbalanced parentheses")
}