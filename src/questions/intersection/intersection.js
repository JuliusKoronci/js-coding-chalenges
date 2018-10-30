export const intersection = (list1, list2) => {
    const intersetion = [];
    const map = {};
    list1.forEach(item => {
        map[item] = item;
    });
    list2.forEach(item => {
        if (map[item]) {
            intersetion.push(item);
        }
    });

    return intersetion;
};