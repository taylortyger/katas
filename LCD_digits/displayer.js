const digits = require('./digits');

function convertToLCD(number){
    switch(number) {
        case 0: return digits.ZERO;
        case 1: return digits.ONE;
        case 2: return digits.TWO;
        case 3: return digits.THREE;
        case 4: return digits.FOUR;
        case 5: return digits.FIVE;
        case 6: return digits.SIX;
        case 7: return digits.SEVEN;
        case 8: return digits.EIGHT;
        case 9: return digits.NINE;
        default: throw "Expected single digit 0-9";
    }
}

module.exports = {
    convertToLCD: convertToLCD
}