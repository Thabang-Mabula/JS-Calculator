/**
 * @class Stack
 * @description Class representing the stack data-structure
 */
export default class Stack {
    /**
     * Constructor
     */
    constructor() {
        this.array = []
    }

    /**
     * Add an element to the top of the stack
     * @param {Object} elem Element to be added
     */
    push(elem) {
        this.array.push(elem)
    }

    /**
     * Return and remove the element at the top of the stack
     * @returns {Object} Element at the top of the stack
     */
    pop() {
        if (this.isEmpty()) throw new IndexOutOfBoundsError(`${this.name} is empty`)

        let arrayLength = this.array.length
        let lastValue = this.array[arrayLength - 1]
        this.array = this.array.splice(0, arrayLength - 1)
        return lastValue
    }

    /**
     * Remove all elements from the stack
     */
    clear() {
        this.array = []
    }

    /**
     * Indicates whether the stack is empty
     * @returns {Boolean} True if the stack if empty, false otherwise
     */
    isEmpty() {
        return this.size() == 0;
    }

    /**
     * Get the number of elements in the stack
     * @returns {Number} Number of elements in the stack
     */
    size() {
        return this.array.length
    }
}
