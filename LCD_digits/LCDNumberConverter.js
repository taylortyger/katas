let patterns = require('./Patterns').patterns;

const LCDNumberConverter = {
    
    convertToLCDString(number) {
        if(typeof(number) === 'string' && !isNaN(number)) number = parseInt(number);
        if(typeof(number) !== 'number') number = 0;
        number = Math.trunc(number);
        let digits = number.toString().split('').map(digit => parseInt(digit));
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
}

module.exports = {
    LCDNumberConverter
}