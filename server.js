//******************************************************************************
// Launch a web server
//******************************************************************************

var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res) {

  // The URL to scrape from will be http://www.shirts4mike.com/shirts.php

  url = 'http://www.shirts4mike.com/shirts.php?id=101';

  // The structure of our request call
  // The first parameter is our URL
  // The call back function takes 3 prameters, and error, response status code and the html

  request(url, function(error, response, html) {

    // First we'll check to make sure no erros occured when making the request

    if(!error) {

      // Next, we'll utilize the cheerio library on the returned html which will essentiall give us jQuery functionality

      var $ = cheerio.load(html);

      // Fially, we'll define the variable we're going to capture

      var title, price, imageURL, sourceURL, dateTime;
      var json = { title: "", price: "", imageURL: "", sourceURL: "", dateTime: "" };

    }

  })

})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;
