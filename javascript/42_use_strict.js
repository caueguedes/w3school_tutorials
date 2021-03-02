{
  "use strict";
  x = 3.14; 
}


{
  "use strict";
  myFunction();

  function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
  }
}

{
  "use strict";
  myFunction();

  function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
  }
}

// Not allowed
"use strict";
x = 3.14;                // This will cause an error
x = {p1:10, p2:20};      // This will cause an error
delete x;                // This will cause an error

// duplicating a parameter
function x(p1, p1) {};   // This will cause an error
// octal
var x = 010;             // This will cause an error
// octal scape characters
var x = "\010";            // This will cause an error


// writing to a read only propertie
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

// writing to get only properties
var obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error


delete Object.prototype; // This will cause an error


// EVAL IS NOT ALLOWED TO CREATE VARIABLES
"use strict";
eval ("var x = 2");
alert (x);             // This will cause an error