function myFunction() {
  alert('Hello');
}

// SET TIME OUT
setTimeout(myFunction, 3000);

// SET INTERVAL
setInterval(myFunction, 5000);


// STOP EXECUTION
myVar = setTimeout(myFunction, 3000);
clearTimeout(myVar);

myVar = setInterval(myFunction, 3000);
clearInterval(myVar);
