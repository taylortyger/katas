let patterns = require('./Patterns').patterns;

const LCDNumberConverter = {
    
    convertToLCDString(number) {
        if(typeof(number) !== 'number') number = 0;
        let digitPattern = patterns[number];
        return digitPattern.join('\n');
    }
}

module.exports = {
    LCDNumberConverter
}