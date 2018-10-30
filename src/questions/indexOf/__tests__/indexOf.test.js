import { indexOf } from '../indexOf';

describe('indexOf', function () {
    it('should return the index', function () {
        expect(indexOf([1, 2, 3], 1)).toEqual(0);
    });
    it('should return the -1 if not found', function () {
        expect(indexOf([1, 2, 3], 4)).toEqual(-1);
    });
});