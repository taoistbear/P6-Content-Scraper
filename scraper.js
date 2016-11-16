// TREEHOUSE TECH DEGREE FULL STACK P6 CONTENT SCRAPER

//******************************************************************************
// Visit URL on said server that activate the web scraper
//******************************************************************************

var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');



var mainUrl = 'http://www.shirts4mike.com/shirts.php';
var linkNum;

request(mainUrl, function(error, response, html){
  if(!error){
    var $ = cheerio.load(html);

    var links = $('.products').find('li');
    linkNum = links.length;
  }
  console.log('There are ' + linkNum + ' links to cycle through!');
})

for (var i=0; i<linkNum; i++) {
  var subUrl = 'http://www.shirts4mike.com/shirt.php?id=10' + (linkNum + 1) + '';
  var outputName = 'output' + i ;

  request(subUrl, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, price, imageUrl, sourceUrl, dateTime;
      var json = { title : "", price : "", imageUrl : "", sourceUrl : "", dateTime : "" };

      $('.shirt-picture').filter(function(){
        var data = $(this);
        title = data.children().first().children().first().attr('alt');
        imageUrl = data.children().first().children().first().attr('src');

        json.title = title;
        json.imageUrl = imageUrl;
      })

      $('.price').filter(function(){
        var data = $(this);
        price = data.text();

        json.price = price;
      })

      sourceUrl = subUrl;

      json.sourceUrl = sourceUrl;

      // get and create date and time
      var           today = new Date();
                       dd = today.getDate(),
                       mm = today.getMonth()+1,
                     yyyy = today.getFullYear(),
                     hour = today.getHours(),
                   minute = today.getMinutes(),
                   second = today.getSeconds(),
            hourFormatted = hour % 12 || 12,
          minuteFormatted = minute < 10 ? '0' + minute : minute,
                  morning = hour < 12 ? 'am' : 'pm';
      if (dd<10) {
        dd = '0' + dd;
      }
      if (mm<10) {
        mm = '0' + mm;
      }
      json.dateTime = mm + '/' + dd + '/' + yyyy + ' ' + hourFormatted + ':' + minuteFormatted + ':' + second + ' ' + morning;
    }

    fs.writeFile(outputName, JSON.stringify(json, null, 4), function(err){
      console.log('File ' + outputName + ' successfully written! - Check your project directory for the output.json file');
    })
  })

}


//******************************************************************************
// Save the formatted data into a CSV file on machine
//******************************************************************************

//******************************************************************************
//
//******************************************************************************
