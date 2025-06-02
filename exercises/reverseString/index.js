// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1
/* Reverse a string with built-in JS methods
Turn string into array
Call the reverse() method on the array
Join the array back into a string
Return the result */
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

/* Shorthand method */
function reverse(str) {
  return str.split('').reverse().join('')
}


// Solution 2
/* Reverse a string with a for loop
Create an empty string called reversedString
for each character in the provided string,
take the character and add it to the start of reversedString
Return the variable reversedString */
// function reverse(str) {
//   let reversedString = ''
//   for (var i = str.length - 1; i>=0; i--) {
//     reversedString += str[i]; // or reversedString = reversedString + str[i];
//   }
//   return reversedString;
// }

/* Shorthand method
For...of syntax which was introduced with ES2015
 */
// function reverse(str) {
//   let reversedString = ''
//   for (let character of str) {
//     reversedString = character + reversedString;
//     debugger;
//   }
//   return reversedString;
// }

// Solution 3
/* Use the reduce method
Reduce takes two arguments:
The first is an arrow function
The second is a starting initial value for our function (an empty string '')
Whenever reduce runs, it takes the starting argument '' and passes it into the arrow function as the first argument
The result that gets returned from arrow function, will then be used as the starting argument for every successive run of the method
Syntax:
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 */
// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversedString, character) => {
//     return character + reversedString;
//   }, '');
// }

// Shorthand method
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

reverse('string');

module.exports = reverse;
