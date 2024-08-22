function calculateNumber(type, a, b) {
    if (type == 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    
    if (type == 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }

    if (type == 'DIVIDE') {
        if (b === 0) {
            return 'Error'
        }
        return Math.round(a) / Math.round(b);
    }
}
console.log(calculateNumber(1.4, 4.5));
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 0));
module.exports = calculateNumber;