class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// Classes are not objects, it is a template for JavaScript objects.

let myCar1 = new Car("Ford", 2014);

// Class Methods
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log(`My car is ${myCar.age(year)} years old.`);