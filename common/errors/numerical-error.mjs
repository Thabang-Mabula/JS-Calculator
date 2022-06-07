/**
 * @class NumericalError
 * @description Custom error for numerical errors
 */
export default class NumericalError extends Error {
    /**
     * Constructor
     * 
     * @param {String} message Message that describes the error
     */
    constructor(message) {
        super(message)
        this.name = this.constructor.name;
    }
}