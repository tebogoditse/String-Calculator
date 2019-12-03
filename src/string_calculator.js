function add(str) {

    let find = /-?[0-9]+/g;
    if (str === "" || str === null){
      return (0);
    }
    var convert = str.match(find).map(function(n){
      let arr = str.match(n);
      let negatives = [];
      let i = 0;
      for (i in arr){
        if (arr[i] < 0){
          negatives.push(arr[i]);
        }
        else{
          i++;
        }
      }
      if (n > 1000){
        return (0);
      }
      if (n < 0){
        throw "negative numbers not allowed " + negatives;
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

module.exports = add;

