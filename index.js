var lineReader = require('line-reader');
var metaLine   = require('./lib/metaLine');
var writeUtil  = require('./lib/writeUtil');

var fs = require('fs');
var path = require('path');

function outputTest (filePath) {
  var stack = []
  var outputFilePath;
  if (arguments[1])
    outputFilePath = path.join(".", arguments[1]);

  outputFilePath = outputFilePath ? outputFilePath : path.join(".", "test.js") 

  var fd = fs.openSync(outputFilePath, "w");

  lineReader.eachLine(filePath, function(line, last) {
    if (line === "") {
      fs.write(fd, "\n");
      return true;
    }
      

    var metaData = metaLine(line);
    var oldMetaData;
    if (stack.length > 0 ) {
      oldMetaData = stack[stack.length - 1];
      if (oldMetaData.level === metaData.level) {
        oldMetaData = stack.pop();
        writeUtil.closeBlock(fd, oldMetaData)
      }
      while (metaData.level < oldMetaData.level) {
        oldMetaData = stack.pop();
        writeUtil.closeBlock(fd, oldMetaData);
      }
    }

    writeUtil.openBlock(fd, metaData);
    stack.push(metaData)

    if (last) {
      while(stack.length > 0) {
        var obj = stack.pop();
        writeUtil.closeBlock(fd, obj);
      }
      fs.closeSync(fd);
      return false;
    }
  });
}

module.exports = outputTest;

if (require.main === module) {
  outputTest.apply(this, process.argv.slice(2))
}
