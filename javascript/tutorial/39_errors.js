// SYNTAX
// try { code to run } catch(kind of error) {code to run if error}
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}

// throw "Too big";    // throw a text
// throw 500;          // throw a number

var x;

try {
  if(x == "") throw "empty";
  if(isNaN(x)) throw "not a number";
  x = Number(x);
  if(x < 5) throw "too low";
  if(x > 10) throw "too high";
}
catch(err) {
  message.innerHTML = "Input is " + err;
}


// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }

try {
  throw "error";
} catch (error) {
  console.log(error.name + " " +  error.message);
} finally {
  console.log("continue executing code.")
}