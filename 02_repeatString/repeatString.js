const repeatString = function(word, repeatTimes) {
if (repeatTimes < 0) return "ERROR"
    let string = ""
    for (let i = 0; i < repeatTimes; i++) {
        string += word
    }
    return string
}

// Do not edit below this line
module.exports = repeatString;
