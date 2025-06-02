/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let hash = {}, distinct = 0, max = 0;
    let start = 0, end = 0;
    while (end < s.length) {
        if (hash[s[end]]==null || hash[s[end]]<=0) distinct++;
        hash[s[end]]=hash[s[end]]+1||1;
        end++;
        while (distinct > 2) {
            hash[s[start]]--;
            if (hash[s[start++]]==0) distinct--;
        }
        max = Math.max(max, end - start);
    }
    return max;
};
