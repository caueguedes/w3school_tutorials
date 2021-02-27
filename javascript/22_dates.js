// DATE
// Date(year, month, day, hours, minutes, seconds, milliseconds);
// Date(milliseconds);
// Date(date string);
var d = new Date();      // Sat Feb 27 2021 15:06:21 GMT-0300 (Brasilia Standard Time)
var d = new Date(2018, 11, 24, 10, 33, 30, 0);

// One and two digits year will be interpretated as 19 century
var d = new Date(99, 11, 24);  // Fri Dec 24 1999 00:00:00 GMT-0200 (Brasilia Summer Time)
var d = new Date(09, 11, 24);  // Fri Dec 24 1909 00:00:00 GMT-0306 (Brasilia Standard Time)

// Date string
var d = new Date("October 13, 2014 11:13:00");


// DATE METHODS
 Date()


// toUTCString()
d.toUTCString(); //  Sat, 27 Feb 2021 18:16:23 GMT

// toISOString()
d.toISOString(); // 2021-02-27T18:15:50.273Z
// toDateString()
d.toDateString(); // Sat Feb 27 2021