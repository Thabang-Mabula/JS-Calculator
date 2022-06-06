import { ExpressionPreProcessors } from "./expression-pre-processors.mjs"

/**
 * @constant PreProcessor
 * @description Util for proccessing a mathematical expression before it is evaluated
 */
export const PreProcessor = {
    /**
     * Prcoesses a mathematical expression with all the relevant expression processors
     * @param {String} expression Mathematical expression
     * @returns Processed mathematical expression
     */
    processExpression: (expression) => {
        ExpressionPreProcessors.forEach((preProcessor) => {
            if (preProcessor.isProcessingRequired(expression)) expression = preProcessor.processExpression(expression)
        })

        return expression
    }
}
