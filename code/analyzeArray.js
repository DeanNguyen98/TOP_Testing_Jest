function analyzeArray(array) {
    if (array == null) return null;
    const sum = array.reduce((arr,val) => arr + val,0); 
    const avrg = sum / array.length;
    return {
        average: avrg,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    } 
}

module.exports = analyzeArray;