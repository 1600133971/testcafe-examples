'use strict';

let shell = require('shelljs');
let range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
let testCount = 5;

for (let i in range(0, testCount))
{
  shell.exec("node app.js", { async: false });
}
