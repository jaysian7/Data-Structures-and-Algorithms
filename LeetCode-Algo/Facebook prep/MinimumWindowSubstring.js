function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    // Frequency map for characters in t
    const freqMap = {};
    for (let char of t) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let required = Object.keys(freqMap).length;
    let formed = 0;
    let windowCounts = {};
    let ans = [Infinity, left, right]; // length, left, right

    while (right < s.length) {
        let c = s[right];
        windowCounts[c] = (windowCounts[c] || 0) + 1;

        if (freqMap[c] && windowCounts[c] === freqMap[c]) {
            formed++;
        }

        while (left <= right && formed === required) {
            c = s[left];
            if (right - left + 1 < ans[0]) {
                ans = [right - left + 1, left, right];
            }

            windowCounts[c]--;
            if (freqMap[c] && windowCounts[c] < freqMap[c]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
}

// Example usage
const s = "ADOBECODEBANC", t = "ABC";
console.log(minWindow(s, t)); // Output: "BANC"
