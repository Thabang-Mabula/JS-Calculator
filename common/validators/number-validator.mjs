const NUMBER_REGEX = /\d*\.?\d+/

/**
 * @constant NumberValidator Util for validating numbers
 */
export const NumberValidator = {
    /**
     * Validates whether the given input is a string representing a number
     * @param {String} stringInput Input string
     * @returns {Boolean} True if the given input is a string representing a number 
     */
    isNumber: (stringInput) => {
        return NUMBER_REGEX.test(stringInput)
    }
}