const leapYears = function(year) {
    if ((Number.isInteger(year / 4) === true) && (Number.isInteger (year / 100) === false)) {
        return true
    }   else if ((Number.isInteger(year / 4) === true) && (Number.isInteger (year / 100) === true)) {
            if (Number.isInteger (year / 400) === true) {
                return true
            } else return false
        }
        return false
    }
// Do not edit below this line
module.exports = leapYears;
