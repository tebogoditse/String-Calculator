function add(str) {

  var i = 0;
  var sum = 0;
  var find = /-?[0-9]+/g;
  var convert = str.match(search).map(function(x){
    return parseInt(x, 10);
  });

  for (; i < str.length; i++){
    sum = sum + convert[i];
  }

  return sum;
}
