/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
let isLongPressedName = function(name, typed) {
    for (let i = 0, j = 0; i < name.length; i++, j++) {
        let currNameChar = name.charAt(i);
        let currNameTyped = typed.charAt(j);
        let nextNameChar = name.charAt(i+1);
        
        if (currNameChar !== currNameTyped) {
            return false;
        }
        if (currNameChar !== nextNameChar) {
            while (currNameTyped === typed.charAt(j+1)) {
                j += 1;
            }
        }
    }
    return true;
};
isLongPressedName();