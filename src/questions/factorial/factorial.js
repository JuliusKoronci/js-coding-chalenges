/**
 * Factorial O(n) complexity
 *
 * @param {number} number
 * @returns {*}
 */
export const factorial = (number) => {
    if (number < 0) {
        throw new Error('Provide a natural number');
    }
    if (number === 1 || number === 0) {
        return number;
    }
    let total = 1;

    while (number > 1) {
        total = total * number;
        number--;
    }

    return total;
};