/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let minDistance = words.length;
    
    // Brute Force 
    // for (let i=0;i<words.length;i++) {
    //     if (words[i] === word1) {
    //         for (let j=0;j<words.length;j++) {
    //             if (words[j] === word2) {
    //                 minDistance = Math.min(minDistance, Math.abs(i-j));
    //             }
    //         }
    //     }
    // }
    
    // One pass
    let i1 = -1, i2 = -1;
    for (let i=0;i<words.length;i++) {
        if (words[i] === word1) {
            i1 = i;
        } else if (words[i] === word2) {
            i2 = i;
        }
        
        if (i1 !== -1 && i2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(i1-i2));
        }
    }
    
    return minDistance;
};