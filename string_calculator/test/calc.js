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
    });
});