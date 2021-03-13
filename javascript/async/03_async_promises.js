// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code

// JAVASCRIPT PROMISE OBJECT
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve();  // for when successful
  myReject();   // for when error
})

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


// PROMISE OBJECT PROPERTIES
// Pending
// Fulfilled
// Rejected

// myPromise.state	      myPromise.result
// "pending"     	            undefined
// "fulfilled"             a result value
// "rejected"              an error object 

function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(onResolve, onReject) {
  let req = XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      onResolve(req.response);
    } else {
      onReject("File not found!");
    };
    req.send();
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

