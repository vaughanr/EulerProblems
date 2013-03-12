var _ = require('underscore');

exports.lastPrimeNumber = function(numRequested){
    var primes = [2];
    var lastPrime = 2;
    var i = 3;
    while(primes.length < numRequested){

        var res = _.some(primes, function(num){
            return i % num == 0;
        });

        if(!res){
            primes.push(i);
            lastPrime = i;
        }
        i++;
    }
    return lastPrime;
};