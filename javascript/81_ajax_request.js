var xhttp = XMLHttpRequest();

// SYNTAX   open(method, url, async)

// GET
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();

// POST
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");


// ON READY STATE CHANGE
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();



// SERVER 
// RESPONSE

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// with a callback function
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp) {
  document.getElementById("demo").innerHTML =
  xhttp.responseText;
}

loadDoc("url-1", myFunction1);

// Server Response Properties
xhttp.responseText;
xhttp.responseXML;

// Server Response methods
xhttp.getResponseHeader();
xhttp.getAllResponseHeaders();
