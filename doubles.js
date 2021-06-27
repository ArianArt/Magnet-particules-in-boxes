function doubles(maxk, maxn) {
    // your code
  var r = 0;
  for(var k = 1; k <= maxk; k++) {
    r += v(k, maxn);
  }
  return r;
}

function v(k, N) {
  var r = 0;
  for(var n = 1; n <= N ; n++) {
    r += 1/(k * Math.pow(n + 1,2*k));
  }
  
  return r;
}
