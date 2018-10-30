const shuffleLeft = (sortObj, currentItem, currentIndex) => {
    const left = sortObj[currentIndex - 1];
    sortObj[currentIndex - 1] = currentItem;
    sortObj[currentIndex] = left;


    if (sortObj[currentIndex - 2] && sortObj[currentIndex - 2] > sortObj[currentIndex - 1]) {
        shuffleLeft(sortObj, sortObj[currentIndex - 1], currentIndex - 1);
    }
    if (sortObj[currentIndex + 1] && sortObj[currentIndex + 1] < sortObj[currentIndex]) {
        shuffleRight(sortObj, sortObj[currentIndex], currentIndex);
    }
    return;
};
const shuffleRight = (sortObj, currentItem, currentIndex) => {
    const left = sortObj[currentIndex + 1];
    sortObj[currentIndex + 1] = currentItem;
    sortObj[currentIndex] = left;


    if (sortObj[currentIndex + 2] && sortObj[currentIndex + 2] < sortObj[currentIndex + 1]) {
        shuffleLeft(sortObj, sortObj[currentIndex - 1], currentIndex - 1);
    }
    if (sortObj[currentIndex - 1] && sortObj[currentIndex - 1] < sortObj[currentIndex]) {
        shuffleRight(sortObj, sortObj[currentIndex], currentIndex);
    }
    return;
};
export const sort = (list) => {
    const sortObj = {};
    for (let i = 0; i < list.length; i++) {
        sortObj[i] = list[i];

        if (sortObj[i - 1] > list[i]) {
            shuffleLeft(sortObj, list[i], i);
        }
    }

    return Object.values(sortObj);
};
