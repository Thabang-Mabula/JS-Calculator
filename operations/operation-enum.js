/**
 * @constant OperationEnum
 * @description Enum for various mathematical operations and their associated
 */
const OperationEnum = {
    ADDITION: {
        symbol: "+",
        arity: 2,
        execute: (firstOperand, secondOperand) => {
            return firstOperand + secondOperand
        }
    },
    SUBTRACTION: {
        symbol: "-",
        arity: 2,
        execute: (firstOperand, secondOperand) => {
            return firstOperand - secondOperand
        }
    },
    MULTIPLICATION: {
        symbol: "×",
        arity: 2,
        execute: (firstOperand, secondOperand) => {
            return firstOperand * secondOperand
        }
    },
    DIVISION: {
        symbol: "÷",
        arity: 2,
        execute: (firstOperand, secondOperand) => {
            return firstOperand / secondOperand
        }
    },
    EXPONENTIATION: {
        symbol: "^",
        arity: 2,
        execute: (firstOperand, secondOperand) => {
            return Math.pow(firstOperand, secondOperand)
        }
    },
    SQUARE_ROOT: {
        symbol: "√",
        arity: 1,
        execute: (operand) => {
            return Math.sqrt(operand)
        }
    }
}

Object.freeze(OperationEnum)

export { OperationEnum }