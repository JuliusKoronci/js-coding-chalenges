import { intersection } from '../intersection';

describe('intersection', function () {
    it('should work', function () {
        expect(intersection([1, 2, 3, 8, 9], [4, 5, 6, 7, 1, 2, 3])).toEqual([1, 2, 3])
    });
});