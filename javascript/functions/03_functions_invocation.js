// Invoking a function
function myFunction(a, b) {
  return a * b;
}
myFunction(2, 4);


// Function as method
var myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  } 
}
myObject.fullName();

// Invoking a Function with a Function Constructor
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
var x = new myFunction("John", "Doe");
x.firstName;         