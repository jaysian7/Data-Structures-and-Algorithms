/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        // swap values at left and right pointer
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++; //increment left pointer
        right--; //decrement right pointer
    }
    
    return s;
};