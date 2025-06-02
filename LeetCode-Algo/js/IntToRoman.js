/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // create a roman to integer mapper
  const romanToNumMapper = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  // create empty string to store our result
  let result = '';
  // iterate through mapper and add to our result
  for (let key in romanToNumMapper) {
    while (num >= romanToNumMapper[key]) {
      result += key; // set result to previous result plus current key(roman numeral)
      num -= romanToNumMapper[key]; // subtract the matched number from current number
    }
  }

  // return result
  return result;
};

/* Since there is a finite set of roman numerals, there is a hard upper limit on how many times the loop
can iterate. Therefore the time complexity is constant time O(1). Since the amount of memory used does not change
with the size of the input integer, the space complexity is constant O(1). */
