/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = function (words) {
    const morseList = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    const getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0);
    
    let newList = words.map(word => word.split('').map(char => morseList[getIdx(char)]).join(''));
    return new Set(newList).size;
};
uniqueMorseRepresentations();