var text;
var i;

for(i=0; i< 10; i++){
  if ( i === 3) { break; }
  text += "The number is " + i + "<br>";
}


// Continue
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }  
  text += "The number is " + i + "<br>";
}