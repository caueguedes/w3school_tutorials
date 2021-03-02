// JAVASCRIPT TYPES
// string, number, boolean, object, function

// JAVASCRIPT KINDS OF OBJECTS
// Object, Date, Array, String, Number, Boolean


typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"


// CONSTRUCTOR PROPERTY
"John".constructor;                // Returns function String()  {[native code]}
(3.14).constructor;                // Returns function Number()  {[native code]}
false.constructor;                 // Returns function Boolean() {[native code]}
[1,2,3,4].constructor;             // Returns function Array()   {[native code]}
// {name: 'John' ,age: 34}.constructor;  // Returns function Object()  {[native code]}
// new Date().constructor;            // Returns function Date()    {[native code]}
// function () {}.constructor;        // Returns function Function(){[native code]}

// checking type
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

// or
function isArray(myArray) {
  return myArray.constructor === Array;
}


// bolleans to string
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"

// UNARY CONVERSION
var y = "5";      // y is a string
var x = + y;      // x is a number

var y = "John";   // y is a string
var x = + y;      // x is a number (NaN)

// BOLLEANS TO NUMBERS
Number(false)     // returns 0
Number(true)      // returns 1

// DATE TO number
d = new Date();
Number(d)          // returns 1404568027739
Number(d)          // returns 1404568027739