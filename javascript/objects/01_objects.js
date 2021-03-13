var person = {fname:"John", lname:"Doe", age:25};

// Properties ---------------------------------------------------
// Accessing JavaScript Properties
person.fname;
person["fname"];
let x = "fname";  person[x];

// for in loop
for (x in person) {
  txt += person[x];
}

// Adding new properties
person.nationality = "English";

// Deleting properties
delete person.age;  // delete person["age"];

// Property Attributes
// value, enumerable, configurable, and writable.

// Methods ---------------------------------------------------
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing object methods
person.fullName()

// Built-in functions
var message = "Hello world";
var x = message.toUpperCase();

// Adding new function to object
person.name = function () {
  this.firstName + " " + this.lastName;
};