/**
 * Checks if a number is a prime number
 *
 * @param {number} number - number to check
 * @returns {boolean} - true if number is a prime number
 */
export const isPrime = number => {
    if (number < 2) return false;
    const max = Math.ceil(Math.sqrt(number)) + 1;
    for (let i = 2; i < max; i++) {
        if (number % i === 0 && i !== number) {
            return false;
        }
    }

    return true;
};