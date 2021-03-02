cars = ["Volvo", "Tesla", "Ford", "Fiat"];
var i;

for(i = 0; i < cars.length; i++) {
  text +=   cars[i]+ "<br>";
}

// Kinds of loops

// for
// for/in
// for/of
// while
// while/do

// FOR 
// for (statement 1; statement 2; statement 3) {}
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// several statement 1
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

// no statement 1
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}

// no statement 3
var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}