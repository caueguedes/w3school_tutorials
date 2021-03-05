/* <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form> */

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Constraint Validation HTML Input Attributes //
// disabled                     Specifies that the input element should be disabled
// max                          Specifies the maximum value of an input element
// min                          Specifies the minimum value of an input element
// pattern                      Specifies the value pattern of an input element
// required                     Specifies that the input field requires an element
// type                         Specifies the type of an input element


// Constraint Validation CSS Pseudo Selectors
// :disabled                  	Selects input elements with the "disabled" attribute specified
// :invalid                 	  Selects input elements with invalid values
// :optional                  	Selects input elements with no "required" attribute specified
// :required                  	Selects input elements with the "required" attribute specified
// :valid                 	    Selects input elements with valid values