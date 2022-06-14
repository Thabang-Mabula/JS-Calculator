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
    let openBrackets = expression.match(SpecialCharacterEnum.OPEN_BRACKET.regex)
    let closedBrackets =  expression.match(SpecialCharacterEnum.CLOSING_BRACKET.regex)

    let numberOfOpenBrackets = (openBrackets === null) ? 0 : openBrackets.length
    let numberOfClosedBrackets = (closedBrackets === null) ? 0 : closedBrackets.length

    if (numberOfOpenBrackets != numberOfClosedBrackets) throw new InvalidInputError("The expression contains unbalanced parentheses")
}