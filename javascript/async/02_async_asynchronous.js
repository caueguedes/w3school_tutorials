setTimeout(myFunction, 3000)

function myFunction(){
  console.log("Hey judge");
}

// Interval
setInterval(myFunction(), 1000);

function myFunction() {
  let d = new Date();
  console.log(
    d.getHours() + ":" + 
    d.getSeconds() + ":" + 
    d.getSeconds()
  );
}

// Waiting for files
function myDisplayer(some) {
  console.log(some);
}

function getFile(myCallback) {
  let req = XMLHttpRequest();
  req.open('GET', "myCar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);