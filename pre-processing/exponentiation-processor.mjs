import ExpressionProcessor from "./expression-processor.mjs"
import { OperationEnum } from "../operations/operation-enum.mjs";

const EXPONENTIATION_REGEX = /\d\s\^\s\d/g

export default class ExponentiationProcessor extends ExpressionProcessor {
    processExpression(expression) {
        const exponentTerms = [...expression.matchAll(EXPONENTIATION_REGEX)]
        exponentTerms.forEach((exponentTerm) => {
            expression = expression.replace(exponentTerm, OperationEnum.OPEN_BRACKET + " " + exponentTerm + " " + OperationEnum.CLOSING_BRACKET)
        })

        return expression
    }

    isProcessingRequired(expression) {
        return expression.includes(OperationEnum.EXPONENTIATION)
    }
}