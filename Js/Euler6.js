var _ = require('underscore');

exports.sumOfSquares = function(minVal, maxVal){
    var sum = 0;;
    for(var i = minVal; i <= maxVal;i++){
        sum +=  Math.pow(i,2);
    }
    return sum;
};

exports.squareOfSum = function(minVal, maxVal){
    var sum = 0;;
    for(var i = minVal; i <= maxVal;i++){
        sum += i;
    }
    return Math.pow(sum,2);
};



exports.difference = function(minVal, maxVal){
    var sumOfSquares = exports.sumOfSquares(minVal,maxVal);
    var squareOfSum = exports.squareOfSum(minVal,maxVal);

    return squareOfSum - sumOfSquares;
};





