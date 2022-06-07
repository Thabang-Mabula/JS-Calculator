import { IndexOutOfBoundsError } from "../common/errors/index-out-of-bounds-error.js"

/**
 * @class Queue
 * @description Class representing the queue data-structure
 */
export default class Queue {
    /**
     * Constructor
     */
    constructor() {
        this.array = []
    }

    /**
     * Add an element to the back of the queue
     * @param {Object} elem Element to be added to the back of the queue
     */
    enqueue(elem) {
        this.array.push(elem)
    }

    /**
     * Return and remove the first element in the queue
     * @returns {Object} First element in the queue
     */
    dequeue() {
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
     * Get the number of elements in the queue
     * @returns {Number} Number of elements in the queue
     */
    size() {
        return this.array.length
    }

    /**
     * Remove all elements from the queue
     */
    clear() {
        this.array = []
    }

    /**
     * Check whether the queue is empty or not
     * @returns {Boolean} True if the queue is empty, false otherwise
     */
    isEmpty() {
        return this.size() == 0;
    }

    /**
     * Returns the element at the front of the deque
     * @returns {Object} Element at the front of the deque
     */
    peek() {
        return this.array[0]
    }

}