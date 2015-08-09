
function examineLine (line) {
  var regex = /^(\s*)(\w*)\s(.*)/i;
  var matchArray = line.match(regex);
  matchArray.shift();

  return matchArray;
};

module.exports = examineLine;


