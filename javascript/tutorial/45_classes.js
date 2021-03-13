// SYNTAX
// class NameClass {
//   constructor() { ... }
// }


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// using a class
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);


// METHODS SYNTAX
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }

class Car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.owner = undefine;
  }
  age() {
    let date = new Date();
    return date.getFullYear - this.year;
  }
  owner(x) {
    return "The owner of the car is " + x;
  }
}