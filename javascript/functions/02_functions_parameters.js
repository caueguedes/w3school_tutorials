// PARAMETERS
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}

// default parameters
function myFunction(x, y = 2) {
  // code to execute
}

// arguments object
function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

var x = findMax(1, 123, 500, 44, 88);
