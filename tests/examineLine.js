
var assert = require('assert');
var examineLine = require("../lib/examineLine");

describe("examineLine", function () {
  var line = "describe decorateRelatedData";
  var result = examineLine(line);
  var expectedLength = 3;

  it("should return an array", function () {
    assert.equal(result.constructor, Array);
  })
  context("when I process a line with no initial white space", function () {
    it("should return an array length of three", function () {
      assert.equal(result.length, expectedLength)
    });

    it("should return an array that contains the correct strings", function () {
      assert.equal(result[0], "");
      assert.equal(result[1], "describe");
      assert.equal(result[2], "decorateRelatedData");
    });

  });

  context("when I process a line with initial white space", function () {
    var line = "  context when something happens";
    var result = examineLine(line);

    it("should still return an array length of three", function () {
      assert.equal(result.length, expectedLength);
    });

    it("should return an array that contains the correct strings", function () {
      assert.equal(result[0], "  ");
      assert.equal(result[1], "context");
      assert.equal(result[2], "when something happens");
    });
  });

});


