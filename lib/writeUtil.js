var fs = require('fs');

function openBlock (file, metaData) {
  var level = metaData.level;
  var whitespace = generateWhiteSpace(level);
  var fn    = metaData.fn;
  var title = metaData.title;

  fs.writeSync(file, whitespace + fn + "(\"" + title + "\", function () {\n");
}

function closeBlock (file, metaData) {
  var level = metaData.level;
  var whitespace = generateWhiteSpace(level);
  fs.writeSync(file, whitespace + "});\n")
}

function generateWhiteSpace (level) {
  var whitespaceRule = 2;
  var whitespaceAmount = whitespaceRule * level;
  var whitespace = "";
  if (whitespaceAmount === 0)
      return whitespace;

  var i = 0;
  do { whitespace += " "; i+=1; } while (i < whitespaceAmount);

  return whitespace;
};


module.exports = {
  openBlock: openBlock,
  closeBlock: closeBlock,
  generateWhiteSpace: generateWhiteSpace
};
