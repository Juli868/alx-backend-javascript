const assert = require('assert');
const calculateNumber = require("./0-calcul.js");
describe('Testing the summation of two numbers', () => {
  it('Should equal to 4', () => {
    var result = calculateNumber(1, 3)
      assert.equal(result, 4);
  });
});
