var _ = require('underscore');

exports.highestProduct = function(inputStr){
    var maxProduct = 0;

    var first,
        second ,
        third,
        fourth,
        fifth;

    var fullArr = inputStr.split("");
    for(var i = 0, len = fullArr.length -5; i < len; i++){

        var product = fullArr[i] * fullArr[i + 1] * fullArr[i + 2] * fullArr[i + 3] * fullArr[i + 4];
        if(product > maxProduct){
            maxProduct = product;
            first = fullArr[i],
                second = fullArr[i + 1],
                third = fullArr[i + 2],
                fourth = fullArr[i + 3],
                fifth = fullArr[i + 4];
        }
    }

  return {
      maxProduct:maxProduct,
      first:first,
      second:second,
      third:third,
      forth:fourth,
      fifth:fifth
  };
};