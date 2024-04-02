const capitalize = require("../code/capitalize");

test("Capitalize string", () => {
    expect(capitalize("this is a string")).toMatch("This is a string")
})

test("Capitalize string", () => {
    expect(capitalize("m")).toMatch('M')
})

test("Is null", () => {
    expect(capitalize(null)).toMatch("")
})