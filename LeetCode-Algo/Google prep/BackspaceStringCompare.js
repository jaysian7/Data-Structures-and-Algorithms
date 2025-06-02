/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* Approach 1: Build String
Time Complexity: O(M+N), where M,N are the lengths of s and t respectively
Space Complexity: O(M+N)
*/

var backspaceCompare = function(s, t) {
    // Strip function that returns the complete string
    function strip(str) {
        let answer = [];
        for (let char of str) {
            if (char != '#') {
                answer.push(char);
            } else if (answer.length) {
                answer.pop();
            }
        }
        return answer.join('')
    }

    return strip(s) == strip(t);
};

/* Approach 2: Two Pointer
Time Complexity: O(M+N), where M, N are the lengths of s and t respectively
Space Complexity: O(1)
*/

// function backspaceCompare(s,t) {
//     let i = s.length - 1, j = t.length - 1;
//     let skipS = 0, skipT = 0;
//
//     while (i>=0 || j>= 0) { // while there may be chars in S and T
//         while (i>=0) { // Find position of next possible char in S
//             if (s.charAt(i) == '#') {
//                 skipS++;
//                 i--;
//             } else if (skipS > 0) {
//                 skipS--;
//                 i--;
//             } else break;
//         }
//         while (j>=0) { // Find position of next possible char in T
//             if (t.charAt(j) == '#') {
//                 skipT++;
//                 j--;
//             } else if (skipT > 0) {
//                 skipT--;
//                 j--;
//             } else break;
//         }
//         // If two actual characters are different
//         if (i>=0 && j>= 0 && s.charAt(i) != t.charAt(j)) {
//             return false;
//         }
//         // If expecting to compare char vs nothing
//         if ((i>=0) != (j>=0)) {
//             return false;
//         }
//         i--;j--;
//     }
//     return true;
// }
