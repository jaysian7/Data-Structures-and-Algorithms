/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [];
    let curr = 0;
    for (let char of s) {
      if (char == '(') {
        stack.push(curr);
        curr = 0;
      } else {
        curr = stack.pop() + Math.max(1, curr*2);
      }
    }
  
    return curr;
  };