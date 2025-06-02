// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}; // declare empty object for our character charMap
  let max = 0; // let our max value start at 0
  let maxChar = ''; // variable to store the character that results in maximum

  for (let char of str) { // for..of is used to iterate through arrays or string
    if (charMap[char]) { // if key/entry already exists
      charMap[char]++; // increment the value by 1
    } else {
      charMap[char] = 1; // else set value to 1 (new entry found)
    }
  }

  for (let char in charMap) { // for..in is used to iterate through an object
    if (charMap[char] > max) { // compare the value of the key to the current max
      max = charMap[char]; // if true, set the new max value
      maxChar = char; // set new maxChar to the name of the key
    }
  }

  return maxChar;
}

module.exports = maxChar;
