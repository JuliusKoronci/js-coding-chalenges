import { reduce } from '../reduce';

describe('reduce', function () {
    it('should reduce', function () {
        expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toEqual(10)
    });
});