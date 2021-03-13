// ASYNC / AWAIT
// async makes a function return a Promise
// await makes a function wait for a Promise

async function myFunction() {
  return "Hello";
}
// is the same as 
async function myFunction() {
  return Promise.resolve("Hello");
}

// How to use 
myFunction().then(
  function(value) {},
  function(error) {}
);


// AWAIT
// let value = await promise;
async function myDisplay() {
  let myPromise = new Promise(function(onResolve, onReject) {
    onResolve("yep");
  });

  console.log(await myPromise);
}

// AWAIT FOR A FILE
async function getFile() {
  let myPromise = new Promise(function(onResolve, onReject) {
    let req = new XMLHttpRequest();
    req.open('GET', 'mycar.html');
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myResolve("File not Found");
      }
    };
    req.send();
  });
  console.log(await myPromise);
}