// for (key in object) {}

var person = {fname: "jhon", lname: "Doe", age: 25}

var text = "";
var x;
for (x in person) {
  text += person[x]
}

// FOR EACH

var txt = "";
var numbers = [45, 4, 9, 16, 25]
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}


// FOR OF
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + "<br>";
}

// looping over string
let language = "JavaScript";
let text = "";

for (let x of language) {
text += x + "<br>";
}