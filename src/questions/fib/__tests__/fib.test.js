import { fib } from '../fib';

describe('fib', function () {
    it('should work :)', function () {
        expect(fib(0)).toEqual(0);
        expect(fib(1)).toEqual(1);
        expect(fib(10)).toEqual(55);
        expect(fib(20)).toEqual(6765);
        expect(fib(50)).toEqual(12586269025);
    });
});