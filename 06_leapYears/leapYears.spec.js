const leapYears = require('./leapYears')

describe('leapYears', () => {
  test('works with non century years', () => {
    expect(leapYears(1996)).toBe(true);
  });
  test('works with non century years', () => {
    expect(leapYears(1997)).toBe(false);
  });
  test('works with ridiculously futuristic non century years', () => {
    expect(leapYears(34992)).toBe(true);
  });
  test('works with century years', () => {
    expect(leapYears(1900)).toBe(false);
  });
  test('works with century years', () => {
    expect(leapYears(1600)).toBe(true);
  });
  test('works with century years', () => {
    expect(leapYears(700)).toBe(false);
  });
});
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
