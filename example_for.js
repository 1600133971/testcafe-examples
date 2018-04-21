'use strict';

let shell = require('shelljs');
let testCount = 5;

for (let i = 0; i < testCount; i++)
{
  shell.exec("node app.js", { async: false });
}