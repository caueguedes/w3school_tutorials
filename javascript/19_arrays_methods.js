// LENGTH
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;    // 4

// TO STRING
fruits.toString(); // will return "Banana,Orange,Apple,Mango"

// JOIN
fruits.join(" * ");   // will return "Banana * Orange * Apple * Mango"

// POP & PUSH
// pop
fruits.pop();         // will return the last element "Mango"

// push
fruits.push("Kiwi");       //  ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
fruits.push("Kiwi");       //  push returns the length of the new array

// shift
fruits.shift();             // Removes the first element "Banana" from fruits
                            // and shift all elements to a lower index 

// unshift
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits
                            // ["Lemon", "Banana", "Orange", "Apple", "Mango"];
                            // returns the length of the array


// DELETE                   // prefer pop or shift instead
delete fruits[2];           // ["Banana", "Orange", empty, "Mango"]


// SPLICE                               // fruits.splice(start, elements_to_be_removed, list, of, elements)
fruits.splice(2, 0, "Lemon", "Kiwi");   // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
// use splice to remove elements 
fruits.splice(0, 1);        // Removes the first element of fruits


// CONCAT
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);      //  Concat returns a new array


// SLICE              // array.slice(start, end)
var citrus = fruits.slice(1);     // returns a new array

