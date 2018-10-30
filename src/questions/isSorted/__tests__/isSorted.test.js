import { isSorted } from '../isSorted';

describe('isSorted', function () {
    it('should return true if list is sorted', function () {
        expect(isSorted([])).toEqual(true);
        expect(isSorted([-Infinity, -5, 0, 3, 9])).toEqual(true);
    });
    it('should return false if list is not sorted', function () {
        expect(isSorted([3, 9, -3, 10])).toEqual(false);
    });
});