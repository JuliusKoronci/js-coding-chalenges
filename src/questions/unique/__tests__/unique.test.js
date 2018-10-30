import { unique } from '../unique';

describe('unique', function () {
    it('should work', function () {
        expect(unique([1, 4, 2, 2, 3, 4, 8])).toEqual([1, 4, 2, 3, 8]);
    });
});