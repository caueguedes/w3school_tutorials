// ECS5 -----------------------------------------------------------------------
"use strict"
String.trim()
Array.isArray()
Array.forEach()
Array.map()
Array.filter()
Array.reduce()
Array.reduceRight()
Array.every()
Array.some()
Array.indexOf()
Array.lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
// Property Getters and Setters
// New Object Property Methods


// ES6 ------------------------------------------------------------------------
// The let keyword
let x = 2;

// The const keyword
const HELLO = "hello";

// JavaScript Arrow Functions
const x = (x, y) => x * y;
const x = (x, y) => { return x * y };

// JavaScript For/of
for (variable of iterable) { /* code block to be executed */ }

// JavaScript Classes
class className{
  constructor () {}
}

// JavaScript Promises
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

// JavaScript Symbol
const person = {
  firstName: "John",
  age: 50,
};
let id = Symbol('id');
person[id] = 140353;

// Default Parameters
function myFunction(x, y = 10) {
  return x + y;
}

// Function Rest Parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

// Array.find()
// returns the value of the first array element that passes a test function.

// Array.findIndex()
// returns the index of the first array element that passes a test function.

// New Math Methods
Math.trunc(); Math.sign(); Math.cbrt(); Math.log2(); Math.log10(); 

// New Number Properties
Number.EPSILON; Number.MIN_SAFE_INTEGER.EPSILON; Number.MAX_SAFE_INTEGE.EPSILON; 

// New Number Methods
Number.isInteger(); Number.isSafeInteger();

// New Global Methods
isFinite(); isNaN();

// JavaScript Modules



// ECMAScript 2016 ------------------------------------------------------------
// JavaScript Exponentiation (**)
let x = 2 ** 4;

// JavaScript Exponentiation assignment (**=)
let x = 2;
x **= 4;

// JavaScript Array.prototype.includes
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true


// ECMAScript 2017 ------------------------------------------------------------
// JavaScript String padding
let str = "5";
str = str.padStart(4,0); // 0005

// JavaScript Object.entries
const person = {
  firstName : "John",
  lastName  : "Doe",
  age     : 50,
  eyeColor  : "blue"
};
Object.entries(person); // firstName,John,lastName,Doe,age,50,eyeColor,blue


// JavaScript Object.values
Object.values(person); // John,Doe,50,blue

// JavaScript async functions
async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


// ECMAScript 2018 ------------------------------------------------------------
// Asynchronous Iteration
// for await () {}

// Promise Finally
let myPromise = new Promise();
myPromise.then();
myPromise.catch();
myPromise.finally();

// Object Rest Properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
y; // 2
z; // { a: 3, b: 4 }

// New RegExp Features