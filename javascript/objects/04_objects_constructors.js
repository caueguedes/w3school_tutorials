function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eye = eye;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


// Adding a Property to an Object
myFather.nationality = "English";
myFather.nationality; // English

myMother.nationality; // undefined

// Adding a method
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};


// Adding a propertie to a constructor
Person.nationality = "English";
var myFather = new Person("John", "Doe", 50, "blue");
myFather.nationality; // undefined

// It is necessary to add to the constructor function
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

// Self invoking function
(function () {
  var x = "Hello!!";
})();

// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;