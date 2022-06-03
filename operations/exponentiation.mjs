import { Operation } from "./operation.mjs";

export default class Exponentiation extends Operation {
    execute(operand1, operand2) {
        return Math.pow(operand1, operand2)
    }
}