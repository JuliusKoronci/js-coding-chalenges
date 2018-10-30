import { isPrime } from '../isPrime';

describe('isPrime', function () {
    it('should return true for prime numbers', function () {
        expect(isPrime(3)).toEqual(true);
        expect(isPrime(5)).toEqual(true);
        expect(isPrime(7)).toEqual(true);
    });
    it('should return false for not prime numbers', function () {
        expect(isPrime(9)).toEqual(false);
        expect(isPrime(4)).toEqual(false);
    });
});