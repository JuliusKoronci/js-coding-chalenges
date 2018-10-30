export const filter = (list, callback) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        if (callback(list[i])) {
            newList.push(list[i]);
        }
    }

    return newList;
};