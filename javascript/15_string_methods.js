// indexof

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// lastIndexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

// str.indeOf("word_to_be_locate", "start_index")

// search
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");


// EXTRACTING STRINGS

// slice
// slice(start, end) 
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
var res = str.slice(-12, -6); // negative index
var res = str.slice(-12); // will return the rest of the text



// substr
// substr(start, length)
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, length);
var res = str.slice(-12); // will return the rest of the text

// substring
// substring(start, end) - it does not accept negative index
substring(start, end)


// Replacing string
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
// with regular expression 
var n = str.replace(/MICROSOFT/ig, "W3Schools"); // 
// i case incensitive - g global match 


// toUpperCase, toLowerCase
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
var text3 = text1.toLowerCase();  // text2 is text1 converted to lower

// Concat
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!")

// trim
var str = "       Hello World!        ";
alert(str.trim()); // "Hello World!"


// padding start/end
let str = "5";
str = str.padStart(4,0); // result is 0005
str = str.padEnd(4,0);  // result is 5000


//  char At/CodeAt
var str = "HELLO WORLD";
str.charAt(0);            // returns H
str.charCodeAt(0);         // returns 72  UTF-16 code

str[0];                   // returns H
str[0] = "A";             // Gives no error, but does not work
