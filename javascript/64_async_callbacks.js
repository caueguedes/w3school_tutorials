function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);


// JavaScript Callback
function myCalculatorCallback(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculatorCallback(5, 5, myDisplayer);
