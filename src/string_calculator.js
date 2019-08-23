function add(str) {

    var find = /-?[0-9]+/g;
    var negative = []
    var convert = str.match(find).map(function(n){
    if (n > 1000){
      return (0);
    }
    if (n < 0){
      throw "negative numbers not allowed";
    }
    return parseInt(n);
    });

    let i = 0;
    let sum = 0;
    for (; i < convert.length; i++){
      sum = sum + convert[i];
    }
    return sum;
}
