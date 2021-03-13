var length = 16;                              // Number
var lastName = "Johnson";                     // String
var x  = {firsName: "John", lastName: "Doe"}; // Object


var x = 16 + "Volvo";
// will act as 
var x = "16" + "Volvo";


// IMPORTANT
// Javascript evaluate expressions from left to right. so...
var x = 16 + 4 + "Volvo"; // 20Volvo
// and
var x = "Volvo" + 16 + 4; // Volvo164


// Types are dinamic
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String


// NUMBERS
var x1 = 34.00;   // Written with decimals
var x2 = 34;      // Written without decimals

var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123

// BOOLEANS
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

// Arrays
var cars = ["Saab", "Volvo", "BMW"];


// OBJECTS
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


// TYPEOF
typeof ""           // Returns "string"
typeof "John Doe"   // Returns "string"
typeof 314          // Returns "number"

var car;
typeof car;    // Value is undefined, type is undefined


// NULL IS A OJECT
// You can consider it a bug in JavaScript that typeof null is an object. It should be null.
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;  // Now value is null, but type is still an object


typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true


// COMPLEX DATA
// typeof will return function or object
// will return object for objects, arrays and null
typeof {name:'John', age:34}  // Returns "object"
typeof [1,2,3,4]              // Returns "object" (not "array", see note below)
typeof null                   // Returns "object"
typeof function myFunc(){}    // Returns "function"