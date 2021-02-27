// OPERATORS
var x = 5;

x == 8;     // false
x == 5;     // true
x == "5";   // true

x === 5;    // true
x === "5";  // false

x != 8; true

x !== 5;    // false
x !== "5";  // true
x !== 8;    // true

x > 8;	    //false	
x < 8;	    //true	
x >= 8;     // false	
x <= 8;     // true

if (age < 18) text = "Too young to buy alcohol";


// LOGICAL OPERATORS
// &&     AND
// ||     OR
// !      NOT

// TERNARY OPERATORS
// (condition) ? value1 : value2;
var voteable = (age < 18) ? "Too young":"Old enough";


// Comparing
// If you compare a number and a string number, casting will take place
// then the comparison will be the result of numbers
2 < "12"; // true	

// If you compare two string numbers, the result will be in alphabetical order
"2" < "12" // false