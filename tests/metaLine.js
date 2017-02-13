var assert = require('assert');
var metaLine = require('../lib/metaLine');

function runTest (fn, input, expectedResult) {
  var result = fn.apply(null, input)
  var templateString = "input: " + input + ", " + "expected:  " + JSON.stringify(expectedResult);
  it(templateString, function () { assert.deepEqual(result, expectedResult) })
}
function runTests(fn, inputs, expectedResults) {
    inputs.forEach(function(e, i) { runTest(fn, e, expectedResults[i]); })
}

describe("metaLine", function () {
    var fn = metaLine;
    var inputs = [
      ["describe decorateRelatedData"],
      ["  context when one should dance"],
      ["    this should be level 2"]
    ];

    var expectedResults = [
        { level: 0,
          fn: "describe",
          title: "decorateRelatedData",
        },
        { level: 1,
          fn: "context",
          title: "when one should dance",
        },
        { level: 2,
          fn: "this",
          title: "should be level 2",
        }
    ]
    runTests(metaLine, inputs, expectedResults)

});
