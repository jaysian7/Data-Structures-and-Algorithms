/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    // create two maps to store our characters and substrings
    const charMap = new Map();
    const substringMap = new Map();
    let result = 0, start = 0;

    // implement slide window
    for (let index=0;index<s.length;index++) {
        // get the current character
        const char = s[index];
        // retrieve number of character count
        const charCount = charMap.get(char) ?? 0;
        // increment character count by 1
        charMap.set(char, charCount + 1);
        if (index-start+1 > minSize) {
            const startChar = s[start];
            const startCharCount = charMap.get(startChar);
            charMap.set(startChar, startCharCount - 1);
            if (charMap.get(startChar) === 0) charMap.delete(startChar);
            start++;
        }
        if (index-start + 1 === minSize && charMap.size <= maxLetters) {
            const substring = s.slice(start, index+1);
            const substringCount = substringMap.get(substring) ?? 0;
            substringMap.set(substring, substringCount + 1);
            result = Math.max(result, substringMap.get(substring));
        }
    }

    return result;
};