// TO STRING
x = 123;
x.toString();               // returns "123"
(100 + 23).toString();      // returns "123"


// TO EXPONENTIAL
var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(6);     // returns 9.656000e+0

// TO FIXED
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(6);           // returns 9.656000

// TO PRECISION
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(6);       // returns 9.65600


// NUMBER METHOD
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// will return timestamp
Number(new Date("2017-09-30"));    // returns 1506729600000


// PARSE INT
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 

// PARSE FLOAT
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN


// NUMBER PROPERTIES //
// MAX_VALUE	          Returns the largest number possible in JavaScript
// MIN_VALUE	          Returns the smallest number possible in JavaScript
// POSITIVE_INFINITY	  Represents infinity (returned on overflow)
// NEGATIVE_INFINITY	  Represents negative infinity (returned on overflow)
// NaN	                Represents a "Not-a-Number" value