function capitalize(string) {
    if (string === "") return "";
    if (string === null) return "";
    const splitString = string.split("");
    const capitalized = splitString[0].toUpperCase();
    return capitalized + splitString.slice(1).join("");
}

module.exports = capitalize;