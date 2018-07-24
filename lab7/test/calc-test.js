
var expect = require('chai').expect;
var calc = require('../calc');
var sinon = require('sinon');

describe('calc-tests', function() {
  describe('add', function() {
    it('should return 2 for 1 + 1', function() {
      expect(calc.add(1, 1)).to.equal(2);
    });
    it('should return 1 for 0 + 1', function() {
        expect(calc.add(0, 1)).to.equal(1);
      });
    it('should return -1 for (-3) + (2)', function() {
        expect(calc.add(-3, 2)).to.equal(-1);
    });
  });
});
