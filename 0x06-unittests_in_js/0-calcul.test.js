const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculate', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 0', function() {
        assert.strictEqual(calculateNumber(0.1, 0.3), 0);
    });

    it('should return 0', function() {
        assert.strictEqual(calculateNumber(-0.1, 0.3), 0);
    });

    it('should return -1', function() {
        assert.strictEqual(calculateNumber(-1.1, 0), -1);
    });
});