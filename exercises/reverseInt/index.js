// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// Solution
/* Use built-in Math.sign() function
Which returns +1, -1, or 0
Indicating the sign of the number passed
*/
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n); // parseInt(Value, radix) is a JS function which converts a string into an integer
  // The default radix is 10 (decimal system)
}

module.exports = reverseInt;
