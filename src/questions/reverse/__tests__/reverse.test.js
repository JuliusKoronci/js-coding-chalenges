import { reverse } from '../reverse';

describe('reverse', function () {
    it('should reverse string', function () {
        expect(reverse('abcd')).toEqual('dcba');
    });
    it('should reverse string', function () {
        expect(reverse([1, 2, 3])).toEqual('321');
    });
});