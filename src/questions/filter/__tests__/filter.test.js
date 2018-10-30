import { filter } from '../filter';

describe('filter', function () {
    it('should filter by function', function () {
        expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2])
    });
});