var _ = require('underscore');

exports.getSmallestDivisible = function(minVal, maxVal){

    var current = 0;
    var notDivisible = true;

    while(notDivisible){
        current += maxVal;

        notDivisible = false;
        for(var i = minVal; i <= maxVal; i++){
            if(current % i != 0){
                notDivisible = true;
                break;
            }
        }
    }
    return current;
};

