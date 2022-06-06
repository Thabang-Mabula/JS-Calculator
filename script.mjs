import { calculateResult } from "./calculator.mjs";
import { OperationEnum } from "./operations/operation-enum.mjs";
import { PreProcessor } from "./pre-processing/pre-processor.mjs";

const input = document.getElementById("input-field");
const resultElement = document.getElementById("result-span");

const addNumberToInput = (event) => {
    let element = event.target
    input.value = input.value + element.value
}

const addOperatorToInput = (event) => {
    let element = event.target
    if (element.value == OperationEnum.OPEN_BRACKET) input.value = input.value + element.value + " "
    else if (element.value == OperationEnum.CLOSING_BRACKET) input.value = input.value + " " + element.value
    else input.value = input.value + " " + element.value + " "
}

const clearCalculator = () => {
    input.value = ""
    resultElement.textContent = ""
}

const erase = () => {
    let expression = input.value.trim()
    input.value = expression.substring(0, expression.length - 1)
}

const calculate = () => {
    try {
        let expression = input.value.trim()
        expression = PreProcessor.processExpression(expression)
        let result = calculateResult(expression)
        resultElement.textContent = result
    } catch (error) {
        alert(error.message)
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
    




