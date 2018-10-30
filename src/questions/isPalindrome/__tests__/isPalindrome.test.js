import { isPalindrome } from '../isPalindrome';

describe('isPalindrome', function () {
    it('should return true 1', function () {
        expect(isPalindrome('abcdcba')).toEqual(true);
    });
    it('should return true 2', function () {
        expect(isPalindrome('')).toEqual(true);
    });
    it('should return true 3', function () {
        expect(isPalindrome('A man a plan a canal Panama')).toEqual(true);
    });
    it('should return false', function () {
        expect(isPalindrome('abcd')).toEqual(false);
    });
});