import UnitaryOperator  from "./unitary-operator.mjs";

export default class SquareRoot extends UnitaryOperator {
    execute(operand) {
        return Math.sqrt(operand)
    }
}