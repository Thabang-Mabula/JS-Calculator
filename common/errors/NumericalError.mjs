export default class NumericalError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name;
    }
}