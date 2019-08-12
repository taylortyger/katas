let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
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

        it('should throw an exception for negative numbers', () => {
            expect(() => { 
                calc.eval('13\n-15,100');
            }).to.throw('Negative numbers are not allowed.');
        });

        it('should throw an exception for negative numbers', () => {
            expect(() => { 
                calc.eval('13\n15,-100');
            }).to.throw('Negative numbers are not allowed.');
        });

        it('should throw an exception for negative numbers', () => {
            expect(() => { 
                calc.eval('-13\n15,100');
            }).to.throw('Negative numbers are not allowed.');
        });

        it('should ignore numbers >1000', () => {
            let res = calc.eval('15\n45\n1001');
            res.should.be.equal(60);
        });

        it('should ignore numbers >1000', () => {
            let res = calc.eval('15\n4500\n100');
            res.should.be.equal(115);
        });
        
        it('should ignore numbers >1000', () => {
            let res = calc.eval('1500\n450\n100');
            res.should.be.equal(550);
        });
        
    });
});