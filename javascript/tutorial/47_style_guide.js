// AVOID
// global variables, new, ==, eval()

// Always Declare Local Variables

// Declarations on Top
// Declare at the beginning
var firstName, lastName, price, discount, fullPrice;


// Initialize Variables
var firstName = "",


// Never Declare Number, String, or Boolean Objects
var y = new String("John");
 

// Don't use objects
// new Object(); new String(); new Number(); new Boolean(); new Array(); new RegExp(); new Function();


// Beware of Automatic Type Conversions
var x = "Hello";     // typeof x is a string
x = 5;               // changes typeof x to a number


// Use === Comparison


// Use Parameter Defaults
function (a=1, b=1) { /*function code*/ }


// End Your Switches with Defaults


// Avoid Using eval()
