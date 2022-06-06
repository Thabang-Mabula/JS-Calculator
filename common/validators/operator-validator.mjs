import { OperationEnum } from "../../operations/operation-enum.mjs"

export const OperattionValidator = {
    isOperation: (stringInput) => {
        for (let operation in OperationEnum) {
            if (OperationEnum[operation] == stringInput) return true
        }

        return false
    }
}