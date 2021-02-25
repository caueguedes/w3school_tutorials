var numbers = [45, 4, 9, 16, 25];
// FOREACH ITERATION
var txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
// OR
numbers.forEach(element => {
  txt += element;
});


// MAP ITERATION
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
// OR
numbers.map( (value) => {
  return value * 2;
});


// FILTER ITERATIONS
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}




// REDUCE ITERATION
var sum = numbers1.reduce(myFunction);        // from left to rigth
var sum = numbers1.reduceRight(myFunction);   // from rigth to left

function myFunction(total, value, index, array) {
  return total + value;
}

// EVERY ITERATION
// method check if all array values pass a test.
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}


// SOME ITERATION
// This example check if some array values are larger than 18:
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// INDEXOF
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");          // 0
var a = fruits.lastIndexOf("Apple");      // 2



// FIND ITERATION
This example finds (returns the value of) the first element that is larger than 18:

