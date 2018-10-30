import { isBalanced } from '../isBalanced';

describe('isBalanced', function () {
    it('should return false', function () {
        expect(isBalanced('}{')).toEqual(false);
    });
    it('should return true', function () {
        expect(isBalanced('{}')).toEqual(true);
    });
    it('should return true1', function () {
        expect(isBalanced('{()}')).toEqual(true);
    });
    it('should return true2', function () {
        expect(isBalanced('{([])}')).toEqual(true);
    });
    it('should return false1', function () {
        expect(isBalanced('{[(])}')).toEqual(false);
    });
});