import {Operation} from "./operation.mjs";

export default class Addition extends Operation {
    execute(operand1, operand2) {
        return operand1 + operand2
    }
}
