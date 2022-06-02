class Stack {
    constructor() {
        this.array = []
    }

    push(elem) {
        this.array.push(elem)
    }

    pop() {
        let arrayLength = this.array.length
        let lastValue = this.array[arrayLength - 1]
        this.array = this.array.splice(0, arrayLength - 1)
        return lastValue
    }

    clear() {
        this.array = []
    }

    isEmpty() {
        return this.size() < 1;
    }

    size() {
        return this.array.length
    }
}

export {Stack}