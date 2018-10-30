export const reduce = (list, callback, initial) => {
    if (list.length === 0) return initial;

    const init = initial !== undefined ? initial : list[0];
    let index = 0;
    let ret = init;
    while (index < list.length) {
        ret = callback(ret, list[index]);
        index++;
    }

    return ret;
};