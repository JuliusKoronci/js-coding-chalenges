const cache = {};

export const fib = (n) => {
    if (cache[n]) {
        return cache[n];
    }
    if (n === 0 || n === 1) {
        return n;
    }
    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
};