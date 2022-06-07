/**
 * @class InvalidInputError
 * @description Custom error for invalid inputs
 */
export default class InvalidInputError extends Error {
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