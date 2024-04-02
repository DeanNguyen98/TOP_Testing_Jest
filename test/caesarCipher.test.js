const caeserCipher = require("../code/caeserCipher")

test("Caeser Cipher" , () => {
    expect (caeserCipher("javascript is fun", 3)).toMatch("MDYDVFULSW LV IXQ")
})

test ("Caeser Cipher wrapping z to a test", () => {
    expect (caeserCipher("xyz", 3)).toMatch("ABC")
})

test("Caeser Cipher spacing test", () => {
    expect(caeserCipher("    xyzxyz", 3)).toMatch("    ABCABC")
})