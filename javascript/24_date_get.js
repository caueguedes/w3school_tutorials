var d = new Date();

// getTime()  - will return the milliseconds since 1970
d.getTime();    // 1614449339782

// getFullYear() 
d.getFullYear(); // 2021

// getMonth()
d.getMonth(); // 0-11
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months[d.getMonth()]; // January

// getDate()
d.getDate();  // 1-31 

// getHours()
d.getHours();  // 0-23

// getMinutes()
d.getMinutes()  // 0-59

// getSeconds()
d.getSeconds()  // 0-59

// getMilliseconds()
d.getMilliseconds();  // 0-999

// getDay()  return the weekday 
d.getDay(); // 0-6

// For each of the above methods there is the UTC version 
// that return the UTC result instead.
// getUTCDate();
// getUTCDay();
// getUTCFullYear();
// getUTCHours();
// getUTCMilliseconds();
// getUTCMinutes();
// getUTCMonth();
// getUTCSeconds();