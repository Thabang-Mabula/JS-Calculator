import { IndexOutOfBoundsError } from "../common/errors/index-out-of-bounds-error.js"

/**
 * @class Deque
 * @description Double-ended queue
 */
export default class Deque {
    /**
     * Constructor
     */
    constructor() {
        this.array = []
    }

    /**
     * Add an element to the end/back of the deque
     * @param {Object} elem Element to be added to the end/back of the deque
     */
    pushBack(elem) {
        this.array.push(elem)
    }

    /**
     * Add an element to the beginning/front of the deque
     * @param {Object} elem Element to be added to the beginning/front of the deque
     */
    pushFront(elem) {
        this.array = [elem].concat[this.array]
    }

    /**
     * Remove and return the element at the beginning/front of the deque
     * @returns {Object} Element at the beginning/front of the deque
     */
    popFront() {
        if (this.isEmpty()) throw new IndexOutOfBoundsError(`${this.name} is empty`)

        let firstElem = this.array[0]
        if (this.size() > 1) {
            this.array = this.array.splice(1, this.size() - 1)
        } else {
            this.clear()
        }

        return firstElem
    }

    /**
     * Remove and return the element at the end/back of the deque
     * @returns {Object} Element at the end/back of the deque
     */
    popBack() {
        if (this.isEmpty()) throw new IndexOutOfBoundsError(`${this.name} is empty`)

        let arrayLength = this.array.length
        let lastValue = this.array[arrayLength - 1]
        this.array = this.array.splice(0, arrayLength - 1)
        return lastValue
    }

    /**
     * Get the number of elements in the deque
     * @returns {Number} Number of elements in the deque
     */
    size() {
        return this.array.length
    }

    /**
     * Empty the deque 
     */
    clear() {
        this.array = []
    }

    /**
     * Indicates whether the deque is empty or not
     * @returns {Boolean} True if the deque is empty, false otherwise
     */
    isEmpty() {
        return this.size() == 0;
    }

    /**
     * Returns the element at the beginning/front of the deque
     * @returns {Object} Element at the beginning/front of the deque
     */
    peekFront() {
        if (this.isEmpty()) throw new IndexOutOfBoundsError(`${this.name} is empty`)

        return this.array[0]
    }

    /**
     * Returns the element at the end/back of the deque
     * @returns Element at the end/back of the deque
     */
    peekBack() {
        if (this.isEmpty()) throw new IndexOutOfBoundsError(`${this.name} is empty`)

        return this.array[this.size() - 1]
    }

}