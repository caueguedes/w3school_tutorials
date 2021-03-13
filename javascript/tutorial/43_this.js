// This in a method
var person = {
  firstName: 'Jhon',
  lastName: 'Doe',
  id: 556,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};


// This Alone
// refer to Global object [object Window] 
var x = this;

// In strict mode this also refer to Global object [object Window]
// "use strict";
// var x = this;


// This in a Function (default)
function myFunction() {
  // refers to the owner of a function so
  return this;  // this refers to Global object [object Window]
}


// This in a Function (strict)
{
  "use strict";
  function myFunctionTwo() {
    // strict mode does not allow default binding.
    return this;  // undefined
  }
}