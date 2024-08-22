const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
    it('should return 6', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
    });

    it('should return -4', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
    });

    it('should return 0.2', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
    });

    it('should return 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0.1)).to.deep.equal('Error');
    });

    it('should return 6', function() {
        expect(calculateNumber('sum', 1.4, 4.5)).to.deep.equal(undefined);
    });

    it('should return 0', function() {
        expect(calculateNumber(-0.1, 0.3)).to.deep.equal(undefined);
    });

    it('should return -1', function() {
        expect(calculateNumber(1, -1.1, 0)).to.deep.equal(undefined);
    });
});