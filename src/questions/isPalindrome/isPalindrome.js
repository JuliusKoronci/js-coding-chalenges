export const isPalindrome = string => {
    const left = string.toLowerCase().replace(/ /ig, '').split('').reverse().join('');
    const right = string.toLowerCase().replace(/ /ig, '');

    return left === right;
}