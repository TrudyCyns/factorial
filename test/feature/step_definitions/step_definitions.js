const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const app = require('../../../index');

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

Given('today is Friday', function () {
  this.today = 'Friday';
});

When('I ask whether it is Friday yet', function () {
  this.actualAnswer = app.isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
