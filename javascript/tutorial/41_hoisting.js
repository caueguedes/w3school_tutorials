x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

// WILL WORK SAME WAY AS :

var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;         



// LET AND CONST VARIABLES RAISE ERROR IF USED BEFORE DECLARATION
// the variables are hoisted to top but can't be used
carName = "Volvo";
let carName; // ReferenceError


// INITIALIZING ARE NOT HOISTED
var x = 5; // Initialize x
elem.innerHTML = x + " " + y;           // 5 and undefined
var y = 7; // Initialize y
