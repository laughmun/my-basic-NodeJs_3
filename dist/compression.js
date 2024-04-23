"use strict";

var _fs = require("fs");
var _zlib = require("zlib");
var readImgStream = (0, _fs.createReadStream)('deadpool.jpg');
var writeImgCompressionStream = (0, _fs.createWriteStream)('deadpool.gz');
readImgStream.pipe((0, _zlib.createGzip)({
  //flush = เคลียร์ pipe 
  flush: 0
})).pipe(writeImgCompressionStream).on('finish', function () {
  console.log('compressed finished');
  readImgStream.close();
});