function reverseString(string) {
    if (string === "") return "";
    if (string === null) return "";
    return string.split("").reverse().join("");
}

module.exports = reverseString;