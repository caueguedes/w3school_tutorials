Math.random(); // will return a random number between 0 and 1

// RANDOM INTEGERS
Math.floor(Math.random() * 10); // return 0-9
Math.floor(Math.random() * 11); // return 0-10
Math.floor(Math.random() * 1000); // return 0-99


// RANDOM FUNCTION
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

getRandomInteger(10, 100); // return a number between 10 - 99


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomInteger(10, 100); // return a number between 10 - 100
