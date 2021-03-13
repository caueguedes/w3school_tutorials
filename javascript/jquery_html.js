// JQUERY
// SELECTOR
// id 
var myElement = $("#id01");
// tag
var myElements = $("p");
// class
var myElements = $(".intro");
// css selector
var myElement = $("p.intro");


// Set text
myElement.text("Hello Sweden!");
myElement.textContent = "Hello Sweden!";

// Get Text Content
var myText = myElement.text();
var myText = myElement.textContent || myElement.innerText;  // js

// HTML Content
myElement.text("Hello Sweden!");
myElement.innerHTML = "<p>Hello World</p>"; // js

// Get HTML Content
var content = myElement.html();
var content = myElement.innerHTML; // js

