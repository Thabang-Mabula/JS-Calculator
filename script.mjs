import { calculateResult } from "./calculator.mjs"

const input = document.getElementById("input-field");
const resultElement = document.getElementById("result-span");

// const addNumberToInput = (event) => {
//     let element = event.target
//     input.value = input.value + element.value + " "
// }

// const addOperatorToInput = (event) => {
//     let element = event.target
//     if (input.value.length > 0) addValueToInput(element.value)
//     else input.value = element.value + " "
// }

const addValueToInput = (event) => {
    let element = event.target
    input.value = input.value + element.value + " "
}

const clearCalculator = () => {
    input.value = ""
    resultElement.textContent = ""
}

const calculate = () => {
    let expression = input.value.trim()
    let result = calculateResult(expression)
    resultElement.textContent = result
}

const keyPadButtons = document.querySelectorAll(".keypad-btn")
keyPadButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', addValueToInput)
})

const operatorButtons = document.querySelectorAll(".operator-btn")
operatorButtons.forEach(function (currentBtn) {
    currentBtn.addEventListener('click', addValueToInput)
})

const equalsButton = document.getElementById("calculate-btn")
equalsButton.addEventListener('click', calculate)

const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener('click', clearCalculator

)
    




