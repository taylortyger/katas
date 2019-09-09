const DigitPatterns = require('./DigitPatterns');

class LCDDigit {
    // Should this be a factory pattern instead? 
    constructor(digit) {
        this.pattern = DigitPatterns.getDigitPattern(digit);
    }

    getLine1() {
        return this.pattern[0];
    }

    getLine2() {
        return this.pattern[1];
    }

    getLine3() {
        return this.pattern[2];
    }
}

module.exports = {
    LCDDigit
}