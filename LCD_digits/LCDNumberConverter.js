let patterns = require('./Patterns').patterns;

function cleanInput(number) {
    if(typeof(number) === 'string' && !isNaN(number)) number = parseInt(number);
    if(typeof(number) !== 'number') number = 0;
    number = Math.trunc(number);
    return number;
}

function buildLCDString(digits) {
    let lines = ['','',''];
        for(let i = 0; i < digits.length; i++) {
            let digitPattern = patterns[digits[i]];
            lines[0] += digitPattern[0];
            lines[1] += digitPattern[1];
            lines[2] += digitPattern[2];
            if(i < digits.length-1) {
                lines[0] += ' ';
                lines[1] += ' ';
                lines[2] += ' ';
            }
        }
        return lines.join('\n');
}

function getDigitArrayOf(number) {
    return number.toString().split('').map(digit => parseInt(digit));
}

const LCDNumberConverter = {
    
    convertToLCDString(number) {
        number = cleanInput(number);
        let digits = getDigitArrayOf(number);
        return buildLCDString(digits);
    }
}

module.exports = {
    LCDNumberConverter
}