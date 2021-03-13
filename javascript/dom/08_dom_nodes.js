//<div id="div1">
//  <p id="p1">This is a paragraph.</p>
//  <p id="p2">This is another paragraph.</p>
//</div>

// Creating new Elements
var para = document.createElement("p");
var node = document.createTextNode("This is new.");

para.appendChild(node); // add the text to the paragraph

document.getElementById("div1").appendChild(p); // appended "this is new" inside div1 after p2


// INSERT BEFORE
var child = document.getElementById('p1');

document.getElementById("div1").insertBefore(para, child);// appended "this is new" inside div1 after p2


// REMOVE ELEMENT
var elmnt = document.getElementById("p1");
elmnt.remove();

// REMOVE CHILD
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);


// REPLACE CHILD
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);