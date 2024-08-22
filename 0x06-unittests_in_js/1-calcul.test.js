const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return 6', function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4', function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0.2', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return 0', function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 6', function() {
        assert.strictEqual(calculateNumber('sum', 1.4, 4.5), undefined);
    });

    it('should return 0', function() {
        assert.strictEqual(calculateNumber(-0.1, 0.3), undefined);
    });

    it('should return -1', function() {
        assert.strictEqual(calculateNumber(1, -1.1, 0), undefined);
    });
});