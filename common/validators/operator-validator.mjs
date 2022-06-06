import { OperationEnum } from "../../operations/operation-enum.mjs"

export const OperationValidator = {
    isOperation: (stringInput) => {
        for (let operation in OperationEnum) {
            if (OperationEnum[operation] == stringInput) return true
        }

        return false
    }
}