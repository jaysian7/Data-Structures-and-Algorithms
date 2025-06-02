// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
/* Reverse the string
Store the reversedString in a variable
And compare with initial string or argument
*/
// function palindrome(str) {
//   let reversedString = '';
//   for (let char of str) {
//     reversedString = char + reversedString;
//   }
//   if (str === reversedString) {
//     return true;
//   } else { return false; }
// }

// Solution 2
/* Same as solution 1, but using built in JS methods
Store reversed string in a variable reversedString
And compare with the initial value/argument
*/
// function palindrome(str) {
//   const reversedString = str.split('').reverse().join('');
//   return str === reversedString; // if str === reversed, return true, else return false. This is a shorthand method of returning a boolean.
// }

// Solution 3
/* Uses the JavaScript every() method
This method tests whether all elements in the array pass the test implemented by the provided function.
It returns a boolean value
 */
 function palindrome(str) {
   return str.split('').every((char, i) => {
     return char === str[str.length - i - 1]; // Compare first value with last value in the array, then keep incrementing
     // Remember, we compare with str.length - 1 because arrays start at index 0
   });
 }
module.exports = palindrome;
