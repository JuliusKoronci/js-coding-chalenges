export const reverse = string => {
    let ret = [];
    for (let i = string.length - 1; i >= 0; i--) {
        ret.push(string[i]);
    }

    return ret.join('');
};