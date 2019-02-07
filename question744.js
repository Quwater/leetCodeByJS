/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// O(logn)
let nextGreatestLetter = function(letters, target) {
    // if (target >= letters[letters.length-1]) {
    //     return letters[0];
    // }
    // let start = 0,
    //     end = letters.length-1,
    //     mid;
    // while (start <= end) {
    //     mid = Math.floor((start + end) / 2);
    //     if (letters[mid] < target) {
    //         start = mid + 1;
    //     } else if (letters[mid] > target) {
    //         end = mid - 1; 
    //     } else {
    //         while (letters[mid+1] === target) {
    //             mid++;
    //         }
    //         return letters[mid+1];
    //     }
    // }
    // if (letters[mid] > target) {
    //     return letters[mid];
    // } else {
    //     return letters[mid+1];
    // }
    let start = 0,
        end = letters.length - 1,
        mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (letters[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return letters[start % letters.length];
};

nextGreatestLetter(['c', 'f', 'j'], 'a');