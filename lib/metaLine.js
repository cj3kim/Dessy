var examineLine = require("./examineLine");

function metaLine (line) {
  var matchArray = examineLine(line);
  
  var whitespaceRule = 2;
  var whitespace = matchArray[0];
  var level   = whitespace.length/whitespaceRule;

  var fn      = matchArray[1];
  var title   = matchArray[2]

  if (whitespace.length % 2 !== 0)
    throw new Error("White space was not correctly inputted.")

  return {
    level: level,
    fn: fn,
    title: title
  };
}

module.exports = metaLine;
