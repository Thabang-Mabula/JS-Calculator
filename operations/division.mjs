import { Operation } from "./operation.mjs";

export default class Division extends Operation {
    execute(firstOperand, secondOperand) {
        // TODO do validation
        return firstOperand/secondOperand;
    }
}