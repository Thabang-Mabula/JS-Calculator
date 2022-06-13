import { calculateResult } from "./calculator.js";
import { ExpressionValidator } from "./common/validators/expression-validator.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const expressionInput = document.getElementById("expression")
const decimanPrecisionInput = document.getElementById("decimal-precision")
const resultElement = document.getElementById("result")
const operatorPad = document.getElementById("operator-pad")
const numericalKeypad = document.getElementById("numerical-keypad")
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
        ExpressionValidator.validate(expression)
        expression = PreProcessor.processExpression(expression)
        let result = calculateResult(expression, decimalPrecision)
        resultElement.value = result
    } catch (error) {
        alert(error.message)
        console.error(error)
    }

}

/**
 * Toggles the visibility of the numerical keypad and the operator keypad 
 */
const toggleKeypads = () => {
    toggleElementDisplay(operatorPad, "grid")
    toggleElementDisplay(numericalKeypad, "grid")
}

/**
 * Toggle the display of a given element/component between a specified display style/mode
 * and "none" (i.e. the element is not rendered on the screen)
 * 
 * @param {HTMLElement} element Element to toggle
 * @param {String} componentDefaultDisplayMode Display style of the element when it is rendered on the screen (e.g. "inline", "block", etc.)
 * @returns {HTMLElement} Element with an altered display style
 */
const toggleElementDisplay = (element, componentDefaultDisplayMode) => {
    let display = window.getComputedStyle(element).display
    if (display == "none") {
        display = componentDefaultDisplayMode
    } else {
        display = "none"
    }

    element.style.display = display
    return element
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


const operatorSwitch = document.getElementById("switch")
operatorSwitch.addEventListener('change', toggleKeypads)


