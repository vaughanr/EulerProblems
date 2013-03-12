var solution = require('../Js/Euler7');

/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */

describe('Euler7', function(){
    it('should return the 6th prime number', function(){
        expect(solution.lastPrimeNumber(6)).toBe(13);
    });

    it('should return the 10 001st prime number', function(){
        expect(solution.lastPrimeNumber(10001)).toBe(104743);
    });
});