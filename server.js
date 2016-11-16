// var express = require('express');
// var fs      = require('fs');
// var request = require('request');
// var cheerio = require('cheerio');
// var app     = express();
//
// app.get('/scrape', function(req, res){
//
//   var mainUrl = 'http://www.shirts4mike.com/shirts.php';
//   var linkNum;
//
//   request(mainUrl, function(error, response, html){
//     if(!error){
//       var $ = cheerio.load(html);
//
//       var links = $('.products').find('li');
//       linkNum = links.length;
//     }
//     res.send('There are ' + linkNum + ' links to cycle through!');
//   })
//
//   for (var i=0; i<linkNum; i++) {
//     var subUrl = 'http://www.shirts4mike.com/shirt.php?id=10' + (linkNum + 1) + '';
//     var outputName = 'output' + i ;
//
//     request(subUrl, function(error, response, html){
//       if(!error){
//         var $ = cheerio.load(html);
//
//         var title, price, imageUrl, sourceUrl, dateTime;
//         var json = { title : "", price : "", imageUrl : "", sourceUrl : "", dateTime : "" };
//
//         $('.shirt-picture').filter(function(){
//           var data = $(this);
//           title = data.children().first().children().first().attr('alt');
//           imageUrl = data.children().first().children().first().attr('src');
//
//           json.title = title;
//           json.imageUrl = imageUrl;
//         })
//
//         $('.price').filter(function(){
//           var data = $(this);
//           price = data.text();
//
//           json.price = price;
//         })
//
//         sourceUrl = subUrl;
//
//         json.sourceUrl = sourceUrl;
//
//         // get and create date and time
//         var           today = new Date();
//                          dd = today.getDate(),
//                          mm = today.getMonth()+1,
//                        yyyy = today.getFullYear(),
//                        hour = today.getHours(),
//                      minute = today.getMinutes(),
//                      second = today.getSeconds(),
//               hourFormatted = hour % 12 || 12,
//             minuteFormatted = minute < 10 ? '0' + minute : minute,
//                     morning = hour < 12 ? 'am' : 'pm';
//         if (dd<10) {
//           dd = '0' + dd;
//         }
//         if (mm<10) {
//           mm = '0' + mm;
//         }
//         json.dateTime = mm + '/' + dd + '/' + yyyy + ' ' + hourFormatted + ':' + minuteFormatted + ':' + second + ' ' + morning;
//       }
//
//       fs.writeFile(outputName, JSON.stringify(json, null, 4), function(err){
//         console.log('File ' + outputName + ' successfully written! - Check your project directory for the output.json file');
//       })
//
//       res.send('Check your console!')
//     })
//
//   }
// })
//
// app.listen('8081')
// console.log('Magic happens on port 8081');
// exports = module.exports = app;
