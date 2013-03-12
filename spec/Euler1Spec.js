var solution = require('../Js/Euler1');

/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.
 */

describe('Euler1', function(){
    it('should return 23 for multiples of 3 or 5 under 10', function(){
        expect(solution.sum([3,5],10)).toBe(23);
    });

    it('should return 2318 for multiples of 3 or 5 under 1000', function(){
        expect(solution.sum([3,5],1000)).toBe(233168);
    });
});