// DATE INPUT
// ISO Date	      "2015-03-25" (The International Standard)
// Short Date	    "03/25/2015"
// Long Date	    "Mar 25 2015" or "25 Mar 2015"



// ISO DATES
var d = new Date( "2021-03-27"); // Will be realtive to your time zone


var d = new Date("2015-03-25T12:00:00Z");
// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.



// SHORT DATES
// format  "MM/DD/YYYY"
var d = new Date("03/25/2015");


// LONG DATES
//  "MMM DD YYYY" or  "DD MMM YYYY"
var d = new Date("January 25 2015");
var d = new Date("25 Mar 2015");


// PARSE DATES
// Date.parse()
var msec = Date.parse("March 21, 2012"); // return milliseconds
var d = new Date(msec); // transform in date again 



