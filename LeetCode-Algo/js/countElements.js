function countElements(arr) {
    const map = new Map();
    for (let val of arr) {
        if (map.get(val)) {
            map.set(val, map.get(val)+1);
        } else {
            map.set(val, 1);
        }
    }

    return map;
}