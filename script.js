import { calculateResult } from "./calculator.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const expressionInput = document.getElementById("input-field")
const decimanPrecisionInput = document.getElementById("decimal-precision")
const resultElement = document.getElementById("result")
const EMPTY_SPACE = " "

const addNumberToInput = (event) => {
    let element = event.target
    expressionInput.value = expressionInput.value + element.value
}

const addOperatorToInput = (event) => {
    let element = event.target
    let newValue = expressionInput.value
    if (expressionInput.value[expressionInput.value.length - 1] != EMPTY_SPACE) newValue += " "
    newValue += element.value + " "
    expressionInput.value = newValue
}

const clearCalculator = () => {
    expressionInput.value = ""
    resultElement.textContent = ""
}

const erase = () => {
    let expression = expressionInput.value.trim()
    expressionInput.value = expression.substring(0, expression.length - 1)
}

const calculate = () => {
    try {
        let decimalPrecision = Number.parseInt(decimanPrecisionInput.value)
        let expression = expressionInput.value.trim()
        expression = PreProcessor.processExpression(expression)
        let result = calculateResult(expression, decimalPrecision)
        resultElement.textContent = result
    } catch (error) {
        alert(error.message)
        console.error(error)
    }

}

const keyPadButtons = document.querySelectorAll(".keypad-btn")
keyPadButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', addNumberToInput)
})

const operatorButtons = document.querySelectorAll(".operator-btn")
operatorButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', addOperatorToInput)
})

const equalsButton = document.getElementById("calculate-btn")
equalsButton.addEventListener('click', calculate)

const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener('click', clearCalculator)

const backspaceButton = document.getElementById("erase-btn")
backspaceButton.addEventListener('click', erase)





