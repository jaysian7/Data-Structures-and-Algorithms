/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == null || digits.length === 0) return [];
  
    const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };
  
    const res = [];
    const helper = (index, str) => {
      if (index === digits.length) {
        res.push(str);
        return;
      }
  
      for (const char of map[digits[index]]) {
        helper(index + 1, str + char);
      }
    };
  
    helper(0, '');
    return res;
  
      // Time complexity: O(3^N x 4^M), where N is the number of digits in the input that maps to 3 letters (e.g 2, 3, 4) and M is the number of digits
      // in the input that maps to 4 letters, and N+M is the total number digits in the input
      // Space Complexity: O(3^N x 4^M) since one has to keep 3^N x 4^M solutions
  };