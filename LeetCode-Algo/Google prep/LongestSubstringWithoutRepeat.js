/**
 * @param {string} s
 * @return {number}
 */
 /* Idea is to use a sliding window
 We will use a hashset to store characters in current window
 Then we slide index j to the right. If it is not in the HashSet we slide j further
 Doing so until s[j] is already in the hashset.Now we've found the maximimum size of substrings
 without duplicate characters start with index i. If we do this for all i, we get our answer.
 */
 var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let hashMap = new Map();
    
    for (let i=0, j=0; j<s.length; j++) {
        if (hashMap.has(s.charAt(j))) {
            i = Math.max(hashMap.get(s.charAt(j)), i);
        }
        answer = Math.max(answer, j-i+1);
        hashMap.set(s.charAt(j), j+1)
    }
    return answer; 
};