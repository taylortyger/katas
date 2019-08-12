let chai = require('chai');
let should = chai.should();
let calc = require('../string-calculator');

describe('String Calculator Functions', () => {
    describe('eval()', () => {
        it('should return 0 if string is empty', () => {
            let res = calc.eval('');
            res.should.be.equal(0);
        });

        it('should return the value of a single number', () => {
            let res = calc.eval('13');
            res.should.be.equal(13);
        });

        it('should return the sum of two comma delimited numbers', () => {
            let res = calc.eval('13,15');
            res.should.be.equal(28);
        });

        it('should return the sum of two new line delimited numbers', () => {
            let res = calc.eval('13\n15');
            res.should.be.equal(28);
        });

        it('should return the sum of three comma delimited numbers', () => {
            let res = calc.eval('10,100,200');
            res.should.be.equal(310);
        });

        it('should return the sum of three new line delimited numbers', () => {
            let res = calc.eval('15\n45\n100');
            res.should.be.equal(160);
        });

        it('should return the sum of three comma OR new line delimited numbers', () => {
            let res = calc.eval('13\n15,100');
            res.should.be.equal(128);
        });
    });
});