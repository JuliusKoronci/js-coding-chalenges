import { factorial } from '../factorial';

describe('factorial', function () {
    it('should return true for factorial', function () {
        expect(factorial(1)).toEqual(1);
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
        expect(factorial(6)).toEqual(720);
    });
});