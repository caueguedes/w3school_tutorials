var car = {type: "Fiat", model:"500", color:"white"};
// or
var car = {
  type: "Fiat",
  model:"500",
  color:"white"
};
 
// ACCESSING PROPERTIES
car.type;
// or
car["type"];


// OBJECT METHODS
var person = {
  firsName  : "John",
  lastName  : "Doe",
  id        : 5566,
  fullName  : function() {
    return this.firsName + " " + this.lastName;
  }
};

// ACCESSING OBJECT METHODS
name = person.fullName();
