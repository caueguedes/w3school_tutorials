class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

Car.hello(); // Hello!!


// With Variables
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}

let myCar = new Car("Ford");
Car.hello(myCar);