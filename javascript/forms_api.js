// Constraint Validation DOM Methods
checkValidity();	            // Returns true if an input element contains valid data.
setCustomValidity();	        // Sets the validationMessage property of an input element.

//  <input id="id1" type="number" min="100" max="300" required>
//  <button onclick="myFunction()">OK</button>
//  <p id="demo"></p> 

function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()){
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}

// // Constraint Validation DOM Properties
// validity                 	Contains boolean properties related to the validity of an input element.
// validationMessage          Contains the message a browser will display when the validity is false.
// willValidate               Indicates if an input element will be validated.


// Validate Properties
// customError               	Set to true, if a custom validity message is set.
// patternMismatch            Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow              Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow             Set to true, if an element's value is less than its min attribute.
// stepMismatch              	Set to true, if an element's value is invalid per its step attribute.
// tooLong               	    Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch              	Set to true, if an element's value is invalid per its type attribute.
// valueMissing              	Set to true, if an element (with a required attribute) has no value.
// valid               	      Set to true, if an element's value is valid.

// rangeOverflow example
// If the number in an input field is greater than 100 (the input's max attribute), display a message:

// <input id="id1" type="number" max="100">
// <button onclick="myFunction()">OK</button>
// <p id="demo"></p>

function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeOverflow) {
    txt = "Value too large";
  }
  document.getElementById("demo").innerHTML = txt;
}