// METHOD REUSE ************************************************
// function
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

// function with arguments
var personDescription = {
  fullDescription: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country; 
  }
}

var person1 = {firstName = "John", lastName = "Doe"};
var person2 = {firstName = "Mary", lastName = "Doe"};

// Call Method -------------------------------------------------
person.fullName.call(person1); // John Doe
person.fullName.call(person2); // Mary Doe

// call with arguments
personDescription.fullDescription.call(person1, "Oslo", "Norway");


// Apply Method --------------------------------------------------
person.fullName.apply(person1); // John Doe
person.fullName.apply(person2); // Mary Doe

// apply with arguments
personDescription.apply(person1, ["Oslo", "Norway"]);


// Simulate 
Math.max(1,2,3);

Math.max.apply(null, [1,2,3]);
Math.max.apply(Math, [1,2,3]);
Math.max.apply(" ", [1,2,3]);
Math.max.apply(0, [1,2,3]); 
