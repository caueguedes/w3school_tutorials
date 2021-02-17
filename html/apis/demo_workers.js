var iterations = 0;

function timedCount() {
  iterations = iterations + 1;
  postMessage(iterations);
  setTimeout("timedCount()", 500);
  alert('oi');
}

timedCount();