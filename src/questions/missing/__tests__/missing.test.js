import { missing, missingAny } from '../missing';

describe('missing', function () {
    it('should return missing number1', function () {
        expect(missing([1, 4, 3])).toEqual(2);
    });
    it('should return missing number2', function () {
        expect(missing([2, 3, 4])).toEqual(1);
    });
    it('should return missing number3', function () {
        expect(missing([5, 1, 4, 2])).toEqual(3);
    });
    it('should return undefined if no missing number', function () {
        expect(missing([1, 4, 2, 3])).toEqual(undefined);
    });
});
describe('missingAny', function () {
    it('should return missing number1', function () {
        expect(missingAny([1, 4, 3])).toEqual(2);
    });
    it('should return missing number2', function () {
        expect(missingAny([2, 3, 4])).toEqual(undefined);
    });
    it('should return missing number3', function () {
        expect(missingAny([5, 1, 4, 2])).toEqual(3);
    });
    it('should return undefined if no missing number', function () {
        expect(missingAny([1, 4, 2, 3])).toEqual(undefined);
    });
});