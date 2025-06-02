// var reverseWords = function (str) {
//   return str.split(' ').reverse().join(' ');
// };

var reverseWords = function (sentence) {
  var words = sentence.split(' ').reverse(); // Split the sentence into an array of words and reverse it
  var string = '';
  for (let word in words) {
    if (word > 0) {
      string = string + ' ' + words[word];
    } else {
      string = string + words[word];
    }
  }
  return string;
};
