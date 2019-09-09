let chai = require('chai');
let should = chai.should();
let displayer = require('../displayer');

describe('Calculator Functions', () => {
    describe('sum()', () => {
        it('should return the sum of two numbers', () => {
            let res = displayer.sum(5,3);
            res.should.be.equal(8);
        });
    });
});