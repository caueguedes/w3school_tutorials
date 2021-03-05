// GETTER AND SETTER

var person = {
  firstName: "John",
  lastName: "Doe",
  language: undefined,
  get lang() {
    return this.language;
  },

  set lang(lang) {
    this.language = lang;
  }
};

person.lang("en");
person.lang; // "en"


// Object.defineProperty()
var obj = {counter: 0};

Object.defineProperty(obj, "reset", {
  get : function () { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
  get: function () { this.counter++; }
});

Object.defineProperty(obj, "decrement", {
  get: function () { this.counter--; }
});

Object.defineProperty(obj, "add", {
  set: function (value) { this.counter += value; }
});

Object.defineProperty(obj, "subtract", {
  set: function (value) { this.counter -= value; }
});

obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;