import { calculateResult } from "./calculator.js";
import { KeyStrokeEventHandler } from "./common/listeners/keystroke-event-listener.js";
import { ExpressionValidator } from "./common/validators/expression-validator.js";
import { PreProcessor } from "./pre-processing/pre-processor.js";

const expressionInput = document.getElementById("expression")
const decimanPrecisionInput = document.getElementById("decimal-precision")
const resultElement = document.getElementById("result")
const operatorPad = document.getElementById("operator-pad")
const numericalKeypad = document.getElementById("numerical-keypad")
const combinedKeyPad = document.getElementById("combined-keypad")
const EMPTY_SPACE = " "

const GRID_DISPLAY = "grid"
const NO_DISPLAY = "none"

const WIDE_SCREEN_MEDIA_QUERY = "(min-width: 768px)"

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
    resultElement.value = ""
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
    toggleElementDisplay(operatorPad, GRID_DISPLAY)
    toggleElementDisplay(numericalKeypad, GRID_DISPLAY)
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
    if (display == NO_DISPLAY) {
        display = componentDefaultDisplayMode
    } else {
        display = NO_DISPLAY
    }

    element.style.display = display
    return element
}

/**
 * Toggles the various keypads based on the dimensions of the the user's screen
 * 
 * @param {MediaQueryList} screenDimensionQuery Media query list for the current screen
 */
const displayKeypadForScreenDimensions = (screenDimensionQuery) => {
    if (screenDimensionQuery.matches) {
        operatorPad.style.display = NO_DISPLAY
        numericalKeypad.style.display = NO_DISPLAY
        combinedKeyPad.style.display = GRID_DISPLAY
    } else {
        if (operatorSwitch.checked) {
            operatorPad.style.display = GRID_DISPLAY
            numericalKeypad.style.display = NO_DISPLAY
        } else {
            operatorPad.style.display = NO_DISPLAY
            numericalKeypad.style.display = GRID_DISPLAY
        }

        combinedKeyPad.style.display = NO_DISPLAY
    }
}

var screenDimensionQuery = window.matchMedia(WIDE_SCREEN_MEDIA_QUERY)
screenDimensionQuery.addEventListener('change', displayKeypadForScreenDimensions)

const keyPadButtons = document.querySelectorAll(".keypad-btn")
keyPadButtons.forEach((currentBtn) => {
    currentBtn.addEventListener('click', addNumberToInput)
})

const operatorButtons = document.querySelectorAll(".operator-btn")
operatorButtons.forEach((currentBtn) => {
    currentBtn.addEventListener('click', addOperatorToInput)
})

const equalsButtons = document.querySelectorAll(".calculate-btn")
equalsButtons.forEach((currentBtn) => {
    currentBtn.addEventListener('click', calculate)
})

const clearButton = document.getElementById("clear-btn")
clearButton.addEventListener('click', clearCalculator)

const backspaceButton = document.getElementById("erase-btn")
backspaceButton.addEventListener('click', erase)

decimanPrecisionInput.addEventListener('change', calculate)


const operatorSwitch = document.getElementById("switch")
operatorSwitch.addEventListener('change', toggleKeypads)

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    KeyStrokeEventHandler.handleKeyEvent(keyName)
}, false);