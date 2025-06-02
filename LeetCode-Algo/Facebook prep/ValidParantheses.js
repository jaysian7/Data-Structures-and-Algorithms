/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Create map that takes care of mappings
  let mappings = new Map();
  mappings.set(')', '(');
  mappings.set('}', '{');
  mappings.set(']', '[');

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    // If the current character is a closing bracket.
    if (mappings.has(char)) {
      // Get the top element of the stack. If the stack is empty, set a dummy value of '#'
      let topElement = stack.length ? stack.pop() : '#';

      // If the mapping for this bracket doesn't match the stack's top element, return false.
      if (topElement != mappings.get(char)) {
        return false;
      }
    } else {
      // If it was an opening bracket, push to the stack.
      stack.push(char);
    }
  }

  // If the stack still contains elements, then it is an invalid expression
  return !stack.length;
};
