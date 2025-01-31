
const removeFromArray = function(array, removedChar) {
    if (array.includes(removedChar)) {
        let charIndex = array.indexOf(removedChar);
        array.splice(charIndex, 1);
        return array; }
    }

// Do not edit below this line
module.exports = removeFromArray;
