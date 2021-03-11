// History
// history.back
window.history.back();

// history.go(n)
window.history.go(-2);

// history.forward()
history.forward();

// STORAGE
// LOCAL STORAGE
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");


sessionStorage.setItem("name", "John Doe");
sessionStorage.getItem("name");

// key(n)	                        // Returns the name of the nth key in the storage
// length	                        // Returns the number of data items stored in the Storage object
// getItem(keyname)	              // Returns the value of the specified key name
// setItem(keyname, value)	      // Adds that key to the storage, or update that key's value if it already exists
// removeItem(keyname)	          // Removes that key from the storage
// clear()	                      // Empty all key out of the storage


// WORKER
// WORKER API
var w;

function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}

// FETCH
// FECTH API
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}

getText("fetch_info.txt");


// GEOLOCATION
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

var x = document.getElementById("demo");

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}