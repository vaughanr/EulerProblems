var _ = require('underscore');

exports.getNextPrime = function(primes){
    var i = _.last(primes);
    var primeNotFound = true;
    while(primeNotFound){
        var res = _.find(primes, function(num){
            return i % num == 0;
        });

        if(!res){
            primeNotFound = false;
        }else
        {
            i++;
        }
    }
    return i;
};

exports.primeFactors = function(number){

    var currentPrime = 2;
    var allPrimes = [2]

    var factors = [];

    while(number != 1 ){

        if(number % currentPrime === 0){
            number = number / currentPrime;
            factors.push(currentPrime);
        }
        else{
            var nextPrime =exports.getNextPrime(allPrimes);
            allPrimes.push(nextPrime)
            currentPrime = nextPrime;
        }
    }
    return factors;
};


