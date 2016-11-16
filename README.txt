P6-Content Scraper Treehouse: Full Stack Tech Degree Project

Project Instructions

** Building my own scraper from scratch in order to learn how and customize it the way i need and/or want

01. *** DONE *** Create a 'scraper.js' file.  This should be the file that runs every day.
02. The scraper should create a folder called 'data', if a folder called data doesn't already exist (it should check for the folder).
03. The information from the site you scrape should be stored in a CSV file name after today's date: 2016-01-29.csv.
04. Use a third party NPM package to scrape content from the site. As part of this assignment, you'll need to explain why you chose this package.
05. The scraper should be able to visit the website http://shirts4mike.com and follow links to all t-shirts.
06. The scraper should get the price, title, url and image url from the product page and save it in the CSV.
07. Use a third party npm package to create a CSV file. As part of this assignment, you'll need to explain why you chose this package.
08. The column headers should be in this order: Title, Price, ImageURL, URL and Time. 'Time' should be the time the scrape happened. The columns must be in order (if we were populating a database, the columns would need to be in order to correctly populate the database).
09. If the site is down, an error message describing the issue should appear in the console. You can test your error by disabling the wifi on your computer.
10. If the data file for today's date already exists, your program should overwrite the file.
11. Don't forget to document your code!

Extra-Credit:

X1. Use a linting tool like ESLint to check your code for syntax errors and to ensure general code quality. You should be able to run 'npm run lint' to check your code.
X2. When an error occurs log it to a file 'scraper-error.log.' It should append to the bottom of the file with a time stamp and error e.g. '[Tue Feb 16 2016 10:02:12 GMT-0800 (PST) <error message>].'
