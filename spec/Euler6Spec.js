var solution = require('../Js/Euler6');

/*
 The sum of the squares of the first ten natural numbers is,

 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,

 (1 + 2 + ... + 10)^2 = 55^2 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.

 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

describe('Euler6', function(){
    it('should get sum of square of first 10 natural numbers', function(){
        expect(solution.sumOfSquares(1,10)).toBe(385);
    });

    it('should get square of the sum of the first 10 natural numbers', function(){
        expect(solution.squareOfSum(1,10)).toBe(3025);
    });

    it('should get the difference of the sumOfSquares and squareOfSum for the first 10 natural numbers',function(){
        expect(solution.difference(1,10)).toBe(2640);
    });

    it('should get the difference of the sumOfSquares and squareOfSum for the first 100 natural numbers',function(){
        expect(solution.difference(1,100)).toBe(25164150);
    });
});