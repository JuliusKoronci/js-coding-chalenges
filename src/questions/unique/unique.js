export const unique = (list) => {
    const un = [];
    const map = {};
    list.forEach(item => {
        if (!map[item]) {
            un.push(item);
            map[item] = item;
        }
    });

    return un;
};