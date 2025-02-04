const convertToCelsius = function(degreesF) {
  let degreesC = (degreesF - 32) * (5 / 9)
  return Number(degreesC.toFixed(1))
};

const convertToFahrenheit = function(degreesC) {
  let degreesF = degreesC * (9 / 5) + 32
  return Number(degreesF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
