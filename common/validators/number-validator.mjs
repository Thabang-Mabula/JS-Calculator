const NUMBER_REGEX = /\d*\.?\d+/

export const NumberValidator = {
    isNumber: (stringInput) => {
        return NUMBER_REGEX.test(stringInput)
    }
}