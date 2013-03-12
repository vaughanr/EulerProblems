var solution = require('../Js/Euler3');

/*
 The prime factors of 13195 are 5, 7, 13 and 29.

 What is the largest prime factor of the number 600851475143 ?
 */

describe('Euler3', function(){

    it('should return the next prime after 11', function(){
        var expected = 13;
        var actual = solution.getNextPrime([2,3,5,7,11]);
        expect(actual).toBe(expected);
    });

    it('should return [5,7,13,29] as prime factors of 13195', function(){
        var expected = [5,7,13,29];
        var actual = solution.primeFactors(13195);
        expect(JSON.stringify(expected)).toBe(JSON.stringify(actual));
    });

    it('should return [71,839,1471,6857] as prime factors of 600851475143', function(){
        var expected = [71,839,1471,6857];
        var actual = solution.primeFactors(600851475143);
        expect(JSON.stringify(expected)).toBe(JSON.stringify(actual));
    });
});