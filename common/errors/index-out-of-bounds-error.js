/**
 * @class IndexOutOfBoundsError
 * @description Custom error for indicating that an attempt is being made to access an invalid index in a collection
 */
export class IndexOutOfBoundsError extends Error {
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