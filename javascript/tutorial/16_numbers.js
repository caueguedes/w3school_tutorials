var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals

// Extra large numbers can be written using scientific notation
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

// Integer numbers are accurate untill up to 15 digits
var x = 999999999999999;    // 999999999999999
var y = 9999999999999999;   // 10000000000000000


// The maximum number of decimals is 17 but floating point is not always accurate
var x = 0.2 + 0.1;         // x will be 0.30000000000000004


// NUMERIC STRING
// Javascript will try to convert strings to numbers in all numeric operations
var x = "100";
var y = "10";
var z = x / y;         // z will be 10
var z = x * y;         // z will be 1000

// This won't work
var z = x + y;       // z will not be 110 (It will be 10010)


// Is Not a Number
isNaN('Apple');         //true
typeof NaN;             // returns "number"


// INFINITY
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

var x =  2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity


// CONVERTING TO BASES
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000