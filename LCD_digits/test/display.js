let chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let Patterns = require('../Patterns').patterns;

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
});