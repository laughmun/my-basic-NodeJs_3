"use strict";

var _fs = require("fs");
var readStream = (0, _fs.createReadStream)('test-stream.txt');
readStream.on('data', function (data) {
  console.log('data => ', data.toString());
});