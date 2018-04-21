'use strict';

let schedule = require('node-schedule');
let shell = require('shelljs');
let testCount = 5;
let testIndex = 0;

var j = schedule.scheduleJob('*/1 * * * *', function() {
  if (testIndex > testCount) {
    process.exit();
  }

  shell.exec("node app.js", { async: true });
  testIndex++;
});