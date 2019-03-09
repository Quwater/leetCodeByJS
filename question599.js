/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
let findRestaurant = function(list1, list2) {
    const map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    let result = [];
    let sum;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            sum = i + map.get(list2[i]);
            if (sum < min) {
                result = [list2[i]];
                min = sum;
            } else if (sum === min) {
                result.push(list2[i]);
            }
        }
    }
    return result;
};
findRestaurant(['xiaomi', 'huawei'], ['huawei', 'xiaomi']);