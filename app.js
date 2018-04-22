'use strict';

let createTestCafe = require('testcafe');
let shell = require('shelljs');
let testcafe = null;

createTestCafe('localhost')
  .then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();

    return runner
      .src('fixture1.js')
      .src('fixture2.js')
      .src('fixture3.js')
      .src('fixture4.js')
      .browsers('chrome:headless')
      .reporter('st-minimal')
      .concurrency(3)
      .screenshots('./')
      .run();
  })
  .then(failedCount => {
    testcafe.close();
    testcafe = null;
    shell.exec("pskill chrome.exe", { silent: true} );
  });
