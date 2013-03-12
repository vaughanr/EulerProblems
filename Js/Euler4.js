var _ = require('underscore');

exports.isPalindrome = function(num){
    var numStr = num.toString();
    var reversedNum = numStr.split("").reverse().join("");
    return numStr === reversedNum;
};

exports.largestPalindrome = function(minVal, maxVal){
    var maxPalindrome = 0;
    var first = 0;
    var second = 0;
    for(var i = minVal; i<= maxVal; i++){
        for(var j = i; j<= maxVal; j++){
            var current = i * j;
            if(exports.isPalindrome(current)){
                if(current > maxPalindrome){
                    maxPalindrome = current;
                    first = i;
                    second = j;
                }
            }
        }
    }
    return {
        maxPalindrome:maxPalindrome,
        first:first,
        second:second
    };
};
