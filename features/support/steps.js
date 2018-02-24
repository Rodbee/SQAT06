const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO', function(callback) {
  this.browser
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO at DuckDuckGo");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to google', function(callback) {
  this.browser
    .init()
    .url('https://google.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO google' , function(callback) {
  this.browser
    .setValue('#lst-ib', 'WebdriverIO')
    .keys('Enter').then(function(){
      callback();
    }).catch(function(error){
    callback(error);
  })
})

Then('I should see the search results google', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO - Google Search");
        callback();
  }).catch(function(error){
    callback(error);
  })
})