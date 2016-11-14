//*CONTENT SCRAPER - P6 - TREEHOUSE FULL STACK TECH DEGREE

//******************************************************************************
// *** REQUIRES & VARIABLES ***
//******************************************************************************

var $ = require('cheerio');
var fs = require('fs');
// Chose x-ray due to pagination versatility and simple user interface.  Many other scrapers had/have mutliple dependancies and API was verbose and arduouse.
var Xray = require('x-ray');
var x = Xray();
var today = new Date();

// Create folder to hold data
fs.mkdir('../data');

// set basic open/write function in place... using synchronis to keep data consdtant between usages
fs.openSync('../data/data.csv', 'a', function(err, data) {

});

//******************************************************************************
// x-ray basics and testing
//******************************************************************************

x('http://www.shirts4mike.com/shirts.php', {
   Title: 'img@alt',
   Price: x('.products li a@href', '.shirt-details span@html'),
   ImageURL: x('.products li a@href', '.shirt-picture img@src'),
   URL: '.products li a@href',
})
  .write('results.json')

//******************************************************************************
// CREATE FUNCTIONS FOR SCRAPE
//******************************************************************************

// set basic get request to store json results
var xhReq = new XMLHttpRequest();
xhReq.open("GET", results.json, false);
xhReq.send(null);
var jsonObject = JSON.parse(xhReq.responseText);

// set basic director for data
fs.mkdir('../data');

// set basic open/write function in place... using synchronis to keep data consdtant between usages
fs.openSync('../data/data.csv', '', function(err, data) {

});

//******************************************************************************
// CREATE FUNCTIONS FOR CVS EXPORT
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************

//******************************************************************************
//
//******************************************************************************
