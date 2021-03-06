import { OperationEnum } from "../../operations/operation-enum.js"

/**
 * @constant OperationValidator Util that validates mathematical operations
 */
export const OperationValidator = {
    /**
     * Validates whether the given input is a string representing a mathemtical operation
     * @param {String} stringInput Input string
     * @returns {Boolean} True if the given input is a string representing a mathemtical operation
     */
    isOperation: (stringInput) => {
        for (let operation in OperationEnum) {
            if (OperationEnum[operation].symbol == stringInput) return true
        }

        return false
    }
}