class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    add() {
        return this.first + this.second;
    }
    subtract() {
        return this.first - this.second;
    }
    divide() {
        return parseFloat((this.first / this.second).toFixed(2));
    }
    multiply() {
        return this.first * this.second;
    }
    
}

module.exports = Calculator;