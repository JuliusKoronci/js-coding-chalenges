import { sort } from '../sort';

describe('sort', function () {
    it('should sort', function () {
        expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
    });
    it('should sort 2', function () {
        expect(sort([3, 2, 1, 8, 7, 6, 9])).toEqual([1, 2, 3, 6, 7, 8, 9]);
    });
});