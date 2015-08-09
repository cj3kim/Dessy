
var assert = require('assert');
var metaLine = require('../lib/metaLine');

describe("metaLine", function () {

  it("should generate the correct obj", function () {
    var line   = "describe decorateRelatedData";
    var result = metaLine(line);

    assert.deepEqual(result, {
      level: 0,
      fn: "describe",
      title: "decorateRelatedData",
    });

    var line   = "  context when one should dance";
    var result = metaLine(line);

    assert.deepEqual(result, {
      level: 1,
      fn: "context",
      title: "when one should dance",
    });

  });

});
