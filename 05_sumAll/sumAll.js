const sumAll = function(a, b) {
    
    // Return ERROR for non-positive integers
    if (!(Number.isInteger(a) && a > 0) || !(Number.isInteger(b) && b > 0)) {
        return "ERROR"
    }

    // Push numbers into an array
    let lowNum = Math.min(a, b);
    let highNum = Math.max(a, b);
    const array = [];
    for (let i = lowNum; i <= highNum; i++) {
        array.push(i)
    }

    // Sum each number in the array
    let sum = 0;
    array.forEach(num => {
        sum += num;
    })
    return sum
}

// Do not edit below this line
module.exports = sumAll;
