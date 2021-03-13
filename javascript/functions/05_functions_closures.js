// The counter dilema
var counter = 0;

function add() {
  counter++;
}

add();
add();
add(); // 3
// any object of the page can change the counter value

// NESTED 
function add() {
  var counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}  // We can't reach plus

// CLOSURE
var add = (function() {
  var counter = 0;
  return function () { counter += 1; return counter;}
})(); // define a inner counter with value 0  and return the comportament of incrementing

add();
add();
add(); // counter = 3