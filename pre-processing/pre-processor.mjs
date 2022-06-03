import { OperationEnum } from "../operations/operation-enum.mjs"

const EXPONENTIATION_REGEX = /\d\s\^\s\d/g

const PreProcessor = {
    processExpression: (expression) => {
        if (expression.includes(OperationEnum.EXPONENTIATION)) {
            const exponentTerms = [...expression.matchAll(EXPONENTIATION_REGEX)]
            exponentTerms.forEach((exponentTerm) => {
                expression = expression.replace(exponentTerm, OperationEnum.OPEN_BRACKET + " " + exponentTerm + " " + OperationEnum.CLOSING_BRACKET)
            })
        }

        return expression
    }
}

export {PreProcessor}