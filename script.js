import { calculateResult } from "./calculator.js";
import { ExpressionValidator } from "./common/validators/expression-validator.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const expressionInput = document.getElementById("expression")
const decimanPrecisionInput = document.getElementById("decimal-precision")
const resultElement = document.getElementById("result")
const EMPTY_SPACE = " "

const addNumberToInput = (event) => {
    let element = event.target
    expressionInput.textContent = expressionInput.textContent + element.value
}

const addOperatorToInput = (event) => {
    let element = event.target
    let newValue = expressionInput.textContent
    if (expressionInput.textContent[expressionInput.textContent.length - 1] != EMPTY_SPACE) newValue += " "
    newValue += element.value + " "
    expressionInput.textContent = newValue
}

const clearCalculator = () => {
    expressionInput.textContent = ""
    resultElement.textContent = ""
}

const erase = () => {
    let expression = expressionInput.textContent.trim()
    expressionInput.textContent = expression.substring(0, expression.length - 1)
}

const calculate = () => {
    try {
        let decimalPrecision = Number.parseInt(decimanPrecisionInput.value)
        let expression = expressionInput.textContent.trim()
        ExpressionValidator.validate(expression)
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

decimanPrecisionInput.addEventListener('change', calculate)



