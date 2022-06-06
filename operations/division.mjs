import { Operation } from "./operation.mjs";
import NumericalError from  '../common/errors/NumericalError.mjs'

export default class Division extends Operation {
    execute(firstOperand, secondOperand) {
        if (secondOperand == 0) throw new NumericalError("Cannot divide by zero")

        return firstOperand/secondOperand;
    }
}