export const missing = (list) => {
    let min = list[0];
    let max = list[0];
    let total = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
        total += list[i];
    }
    const sum = (max * (max + 1)) / 2;

    const diff = sum - total;
    if (diff === 0) {
        return undefined;
    }
    return diff;
};

export const missingAny = (list) => {
    let min = list[0];
    let max = list[0];
    let total = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
        total += list[i];
    }
    const sum = (((max - min) + 1) * (max + min)) / 2;

    const diff = sum - total;
    if (diff === 0) {
        return undefined;
    }
    return diff;
};