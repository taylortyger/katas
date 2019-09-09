let chai = require('chai');
let should = chai.should();
let displayer = require('../displayer');
let digits = require('../digits');

describe('Calculator Functions', () => {
    describe('convertToLCD()', () => {
        it('should return a LCD represenation of a single digit', () => {
            let res = displayer.convertToLCD(0);
            res.should.be.equal(digits.ZERO);

            res = displayer.convertToLCD(1);
            res.should.be.equal(digits.ONE);

            res = displayer.convertToLCD(2);
            res.should.be.equal(digits.TWO);

            res = displayer.convertToLCD(3);
            res.should.be.equal(digits.THREE);

            res = displayer.convertToLCD(4);
            res.should.be.equal(digits.FOUR);

            res = displayer.convertToLCD(5);
            res.should.be.equal(digits.FIVE);

            res = displayer.convertToLCD(6);
            res.should.be.equal(digits.SIX);

            res = displayer.convertToLCD(7);
            res.should.be.equal(digits.SEVEN);

            res = displayer.convertToLCD(8);
            res.should.be.equal(digits.EIGHT);

            res = displayer.convertToLCD(9);
            res.should.be.equal(digits.NINE);

        });
    });
});