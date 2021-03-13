Boolean(8 > 10); // false
8 > 10;   // false

// ==    	  equal to
// >	      greater than
// <	      less than 

// EVERYTHING WITH A VALUE IS TRUE
Boolean(100);              // true
Boolean(3.14);             // true
Boolean(-15);              // true
Boolean("Hello");          // true
Boolean("false");          // true
Boolean(7 + 1 + 3.14);     // true

// EVERYTHING WITHOUT A VALUE IS FALSE
Boolean(0);      // false
Boolean(-0);      // false
Boolean("");      // false
Boolean(undefined);      // false
Boolean(null);      // false
Boolean(false);      // false
Boolean(NaN);      // false

// Do not use Boolean objects, it will slow down execution speed
var x = false;
var y = new Boolean(false);

x == y;   // will return true because they have the same value
x === y;  // will return false, it spect the value and type to be equals


var x = Boolean(false);
var y = Boolean(false);

x == y; // objects can not be compared
x === y; // will always return false because objects are always different