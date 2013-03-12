var _ = require('underscore');

exports.fibonacci = function(maxValue){
    var sequence = [1,2];
    var current = 2;
    var previous = 1;
    while(current <= maxValue){
        var next = current + previous;

        if(next  <= maxValue){
            sequence.push(next);
        }
        previous = current;
        current = next;
    }
    return sequence;
};

exports.sumOfEven = function(arr){
    return _.chain(arr)
            .filter(function(num){return num % 2 == 0;})
            .reduce(function(total,next){return total + next;})
            .value();
};

exports.sumOfEvenFibonacci = function(maxValue){
    return exports.sumOfEven(exports.fibonacci(maxValue));
};