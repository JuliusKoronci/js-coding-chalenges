export const isSorted = list => {
    if (list.length === 0) {
        return true;
    }
    try {
        list.reduce((acc, curr) => {
            if (acc < curr) {
                return curr;
            }
            throw new Error('Not sorted');
        });
        return true;
    } catch (e) {
        return false;
    }
};