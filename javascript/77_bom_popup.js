// Alert box, Confirm box, and Prompt box.
// ALERT BOX
window.alert("sometext");



// WINDOW CONFIRM   --------------------------------------------
window.confirm("sometext");

if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}


// PROMPT BOX       --------------------------------------------
window.prompt("sometext","defaultText");

var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}
