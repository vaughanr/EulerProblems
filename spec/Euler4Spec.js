var solution = require('../Js/Euler4');

/*
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

 Find the largest palindrome made from the product of two 3-digit numbers.
 */

describe('Euler4', function(){

    it('should check if a number is a palindrome', function(){
        expect(solution.isPalindrome(9009)).toBeTruthy();
        expect(solution.isPalindrome(15051)).toBeTruthy();
        expect(solution.isPalindrome(11)).toBeTruthy();

        expect(solution.isPalindrome(112)).toBeFalsy();
        expect(solution.isPalindrome(12345)).toBeFalsy();
        expect(solution.isPalindrome(9008)).toBeFalsy();
    });

    it('should get largest palindrome from products on 2 digit numbers', function(){
        expect(solution.largestPalindrome(10,99).maxPalindrome).toBe(9009);
    });

    it('should get largest palindrome from products on 3 digit numbers', function(){
        expect(solution.largestPalindrome(100,999).maxPalindrome).toBe(906609);
    });
});