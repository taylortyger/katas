let chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let patterns = require('../Patterns').patterns;
let LCDNumberConverter = require('../LCDNumberConverter').LCDNumberConverter;

describe('All patterns', () => {
    it('should be a 3x3 grid', () => {
        for (key in patterns) {
            let pattern = patterns[key];
            expect(pattern).to.have.lengthOf(3);
            expect(pattern[0]).to.have.lengthOf(3);
            expect(pattern[1]).to.have.lengthOf(3);
            expect(pattern[2]).to.have.lengthOf(3);
        }
    });

    it('should only contain: white-space, |, or _', () => {
        let allowedCharacters = /^[\s|_]+$/;

        for (key in patterns) {
            let pattern = patterns[key];
            for (line of pattern) {
                expect(line).to.match(allowedCharacters);
            }
        }
    });
});

describe('LCDConverter', () => {
    describe('convertToLCDString(number)', () => {
        it('should return the corresponding LCD string representaion of a single digit number', () => {
            let zeroLCD =  " _ " + "\n" +
                           "| |" + "\n" +
                           "|_|";
            
            let threeLCD = " _ " + "\n" +
                           " _|" + "\n" +
                           " _|";
            
            let nineLCD =  " _ " + "\n" +
                           "|_|" + "\n" +
                           "  |";

            expect(LCDNumberConverter.convertToLCDString(0)).to.equal(zeroLCD);
            expect(LCDNumberConverter.convertToLCDString(3)).to.equal(threeLCD);
            expect(LCDNumberConverter.convertToLCDString(9)).to.equal(nineLCD);
        });

        it('should support digits [0-9]', () => {
            for(let i = 0; i <=9; i++) {
                expect(LCDNumberConverter.convertToLCDString(i)).to.be.a('string');
                expect(LCDNumberConverter.convertToLCDString(i)).to.have.length.greaterThan(0);
            }
        });

        it('should return LCD representation of 0 for non-number types', () => {
            let zeroLCD =  " _ " + "\n" +
                           "| |" + "\n" +
                           "|_|";

            expect(LCDNumberConverter.convertToLCDString(null)).to.equal(zeroLCD);
            expect(LCDNumberConverter.convertToLCDString([0,1,2,3])).to.equal(zeroLCD);
            expect(LCDNumberConverter.convertToLCDString(true)).to.equal(zeroLCD);
        });
    });
});