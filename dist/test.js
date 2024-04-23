"use strict";

setTimeout(function () {
  return console.log(1);
}, 2000);
console.log(2);
setTimeout(function () {
  return console.log(3);
}, 0);
console.log(4);