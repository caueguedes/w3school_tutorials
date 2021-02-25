var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();        // Sorts the elements of fruits
fruits.reverse();     // Then reverse the order of the elements


// COMPARE FUNCTION
points.sort(function(a, b){return a - b});    // return the listing in ascending order
points.sort(function(a, b){return b - a});    // return the listing in descending order

// random order
points.sort(function(a, b){return 0.5 - Math.random()});


// THE FISHER YATES METHOD
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
}

// MAX
points[0];                // if it is ordered
Math.max.apply(null, points);

// MIN
points[points.length-1]   // if it is ordered
Math.min.apply(null, array);


// Sorting function
function myArrayMax(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}


// SORTING OBJECTS
var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

cars.sort(function (a, b) { return a.year - b.year });