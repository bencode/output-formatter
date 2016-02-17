'use strict';


exports.left = function(str, len) {
  const n = len - str.length;
  if (n > 0) {
    str += line(' ', n);
  }
  return str;
};


exports.center = function(str, len) {
  const n = (len - str.length) >> 1;    // eslint-disable-line
  return line(' ', n) + str + line(' ', len - str.length - n);
};


exports.right = function(str, len) {
  const n = len - str.length;
  if (n > 0) {
    str = line(' ', n) + str;
  }
  return str;
};


exports.line = line;


function line(char, num) {
  const list = [];
  list.length = num + 1;
  return list.join(char);
}


exports.red = function(msg) {
  return `\u001b[31m${msg}\u001b[39m`;
};


exports.yellow = function(msg) {
  return `\u001b[33m${msg}\u001b[39m`;
};


