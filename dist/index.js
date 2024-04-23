"use strict";

var _fs = require("fs");
var writeStream = (0, _fs.createWriteStream)('test-stream.txt');

// writeStream.write('Test-2\r\n');
// writeStream.write('Test-3\r\n');
// writeStream.write('Test-4\r\n');
// writeStream.write('Test-5\r\n');

// let count = 1;

for (var count = 0; count < 10; count++) {
  writeStream.write("Test-".concat(count, "\r\n"));
  console.log("Test-".concat(count), 'has created');
}

// setInterval(() => {
//     writeStream.write(`Test-${count}\r\n`);
//     console.log(`Test-${count}` , 'has created')
//     count++;
// }, 1000);

writeStream.end();