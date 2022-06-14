import { KeyStrokeEnum } from "./keystroke-enum.js";

/**
 * Handles keystroke events
 * @param {String} keyName Key name according to the standard values for the KeyboardEvent.key property
 */
const handleKeyEvent = (keyName) => {
    for (let propertyName in KeyStrokeEnum) {
        let keystrokeEnumElem = KeyStrokeEnum[propertyName]
        if (keystrokeEnumElem.keyName == keyName) {
            let btn = document.getElementsByClassName(keystrokeEnumElem.buttonClassName)[0]
            btn.click()
        }
    }
}

/**
 * @constant KeyStrokeEventHandler
 * @description Util for handlng keystroke events
 */
export const KeyStrokeEventHandler = {
    handleKeyEvent: handleKeyEvent
}