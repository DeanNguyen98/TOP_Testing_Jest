class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    add() {
        if (this.first === undefined) {
            return this.second;
        } else if (this.second === undefined) {
            return this.first;
        } else {
            return this.first + this.second;
        }
    }

    subtract() {
        if (this.first === undefined) {
            return -this.second;
        } else if (this.second === undefined) {
            return this.first;
        } else {
            return this.first - this.second;
        }
    }

    multiply() {
        if (this.first === undefined) {
            return 0;
        } else if (this.second === undefined) {
            return 0;
        } else {
            return this.first * this.second;
        }
    }

    divide() {
        if (this.first === undefined) {
            return 0;
        } else if (this.second === undefined) {
            return Infinity;
        } else {
            return parseFloat((this.first / this.second).toFixed(2));
        }
    }
}

module.exports = Calculator;