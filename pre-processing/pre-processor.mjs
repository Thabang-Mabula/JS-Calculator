import { ExpressionPreProcessors } from "./expression-pre-processors.mjs"

const PreProcessor = {
    processExpression: (expression) => {
        ExpressionPreProcessors.forEach((preProcessor) => {
            if (preProcessor.isProcessingRequired(expression)) expression = preProcessor.processExpression(expression)
        })

        return expression
    }
}

export {PreProcessor}