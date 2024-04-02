function caeserCipher(string, key) {
    let newString = "";
    let position = key;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < string.length; i++) {
        for (let j=0; j < alphabet.length; j++) {
            if (string[i] === " ") {
                newString += " ";
                break;
            }
            if (string[i] === alphabet[j]) {
                if (j + position > alphabet.length - 1) {
                    newString += alphabet[j + position - alphabet.length];
                    break;
                } else {
                    newString += alphabet[j + position];
                    break;
                }
            }
        }
    }
    return newString.toUpperCase();
}

module.exports = caeserCipher;