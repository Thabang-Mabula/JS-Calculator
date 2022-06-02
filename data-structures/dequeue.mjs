export class Dequeue {
    constructor() {
        this.array = []
    }

    pushBack(elem) {
        this.array.push(elem)
    }

    pushFront(elem) {
        this.array = [elem].concat[this.array]
    }


    popFront() {
        let firstElem = this.array[0]
        if (this.size() > 1) {
            this.array = this.array.splice(1, this.size() - 1)
        } else {
            this.clear()
        }

        return firstElem
    }

    popBack() {
        let arrayLength = this.array.length
        let lastValue = this.array[arrayLength - 1]
        this.array = this.array.splice(0, arrayLength - 1)
        return lastValue
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

    peekFront() {
        return this.array[0]
    }

    peekBack() {
        return this.array[this.size() - 1]
    }

}