export class Queue {
    constructor() {
        this.array = []
    }

    enqueue(elem) {
        this.array.push(elem)
    }

    dequeue() {
        let firstElem = this.array[0]
        if (this.size() > 1) {
            this.array = this.array.splice(1, this.size() - 1)
        } else {
            this.clear()
        }

        return firstElem
    }

    size() {
        return this.array.length
    }

    clear() {
        this.array = []
    }

    isEmpty() {
        return this.size() < 1;
    }

    peek() {
        return this.array[0]
    }

}