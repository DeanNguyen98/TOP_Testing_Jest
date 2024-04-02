const calc = require("../code/calculator");
const calculator = new calc(5,6);

test("Add", () => {
    expect(calculator.add()).toBe(11)
})
test("Minus" ,() => {
    expect(calculator.subtract()).toBe(-1);
})

test("Divide", () => {
    expect(calculator.divide()).toBe(0.83);
})