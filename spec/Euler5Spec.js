var solution = require('../Js/Euler5');

/*
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

describe('Euler5', function(){
    it('should get smallest common divisor from 1 to 10', function(){
        expect(solution.getSmallestDivisible(1,10)).toBe(2520);
    });

    it('should get smallest common divisor from 1 to 20', function(){
        expect(solution.getSmallestDivisible(1,20)).toBe(232792560);
    });
});