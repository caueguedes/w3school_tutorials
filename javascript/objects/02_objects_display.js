var person = {name:"John", age:30, city:"New York"};

// COMMOM WAYS TO DISPLAY OBJECTS

// Displaying the Object Properties by name
person.name;

// Displaying the Object Properties in a Loop
for (x in person) {
  txt += person[x] + " ";
};

// Displaying the Object using Object.values()
Object.values(person);

// Displaying the Object using JSON.stringify()
var myString = JSON.stringify(person);  // {"name":"John","age":50,"city":"New York"}

// date
JSON.stringify({today: new Date()}); // 2021-03-05T00:12:00.934Z"

// functions
var person = {name:"John", age:function () {return 30;}};
person.age = person.age.toString();
JSON.stringify(person);     // {"name":"John","age":"function () {return 30;}"}

// arrays
JSON.stringify(["John","Peter","Sally","Jane"]) // ["John","Peter","Sally","Jane"]

