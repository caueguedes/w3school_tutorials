// ECS5 declaration
hello = function() {
  return "Hello World!";
}

// With Arrow Function
hello = () => {
  return "Hello world from arrow function!";
}

// OR
hello = () => "Hello world even shorter";

// With Parameters
hello = (param1) => "hello" + val;
hello = param1 => "hello" + val;




// REGULAR FUNCTIONS - this belongs to the caller of the function
// in regular functions the "this" keyword, can have different values
var hello;

hello = function() {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);  //[object Window]

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello); //[object HTMLButtonElement]


// ARROW FUNCTIONS - this belongs to the owner of the function
// in regular functions the "this" keyword will always have the same value
var helloTwo;

helloTwo = () => {
  document.getElementById("demo2").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", helloTwo); //[object Window]

//A button object calls the function:
document.getElementById("btn").addEventListener("click", helloTwo); //[object Window]