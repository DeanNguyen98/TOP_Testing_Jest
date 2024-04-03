const calc = require("../code/calculator");
const calculator = new calc(5,6);
const specialcalc = new calc(6, undefined);

test("Add", () => {
    expect(calculator.add()).toBe(11)
})
test("Minus" ,() => {
    expect(calculator.subtract()).toBe(-1);
})

test("Divide", () => {
    expect(calculator.divide()).toBe(0.83);
})

test("no first operand add ", () => {
    expect(specialcalc.add()).toBe(6)
})

test("no first operand divide", () => {
    expect(specialcalc.divide()).toBe(Infinity)
})