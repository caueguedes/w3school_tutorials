// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing many object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Returns enumerable properties as an array
Object.keys(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Prevents adding properties to an object
Object.preventExtensions(object)
// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)


var person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Changing a property value
Object.defineProperty(person, "language", {value : "NO"});3


// Changing meta data
Object.defineProperty(person, "language", {enumerable:false});
Object.defineProperty(person, "language", {writable:false});
Object.defineProperty(person, "language", {configurable:false});


// Listing all properties
Object.getOwnPropertyNames(person);         // Returns an array of properties


// Listing enumerable properties
Object.defineProperty(person, "language", {enumerable:false});
Object.keys(person);  // Returns an array of enumerable properties


// Adding getters and setters
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});