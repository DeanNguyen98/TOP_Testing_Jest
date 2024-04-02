const reverseString = require("../code/reverse");

test("Reverse string", () => {
    expect(reverseString("ABC")).toMatch("CBA")
})

test("Reverse String", () => {
    expect(reverseString("Hello test")).toMatch("tset olleH")
})

test("Is null", () => {
    expect(reverseString(null)).toMatch("")
})