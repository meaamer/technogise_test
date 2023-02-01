
var chai = require("chai");
var expect = chai.expect;

const dice = require("../ladder");
describe("should return 100", function () {
  it("check response", function () {
    expect(dice()).to.be.equal(100);
  });

  
});
