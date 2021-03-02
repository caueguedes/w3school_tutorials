// SYNTAX
// /pattern/modifier


// using in string methods
// SEARCH
var str = "Visit W3Schools!";
var n = str.search(/w3schools/i); // case-insensitive


// REPLACE
var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");

// Modifiers
// i	  Perform case-insensitive matching	
// g	  Perform a global match (find all matches rather than stopping after the first match)	
// m	  Perform multiline matching

// Patterns
// [abc]	    Find any of the characters between the brackets	
// [0-9]	    Find any of the digits between the brackets	
// (x|y)	    Find any of the alternatives separated with |

// metacharacters
// \d	      Find a digit	
// \s	      Find a whitespace character	
// \b	      Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	  Find the Unicode character specified by the hexadecimal number xxxx

// quantifiers
// n+	      Matches any string that contains at least one n
// n*	      Matches any string that contains zero or more occurrences of n
// n?	      Matches any string that contains zero or one occurrences of n


// TEST
/e/.test("The best things in life are free!");    // returns true

// EXEC
/e/.exec("The best things in life are free!");    // returns an text object or an null object

