/**
1. Just general validations & checks
2. Using Map() because most of the operations I'll be using are O(1), you could opt for a dictionary using an object but you'll see in step 5 we optimize for speed
3. We loop over every word
4. We create 2 variables, 1 is the word, 1 is the word but sorted alphabetically
-worst O(n^2)
-avg O(n log(n))
5.The magic of our Map() is here
-If our sorted word matches any existing sorted word (which makes it an anagram) then we add it to our anagram list
-If our sorted word doesn't match anything, add a new entry to the map
--The key would be the sorted word
--The value would be an array of the word eg. ["word"]
-Map().size is an O(1) solution of getting the length vs Object.entries(...).length is an O(n) because of converting an object to an array
-get(), has(), push() and set() are all O(1)
-The only added benefit of using this over a dictionary is readability and the size prototype from Map()
6. We'll have all our results stored in our Map(), we just iterate over all our results and put them into 1 array then return that!

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1
    if (strs.length === 0) return []
    if (strs.length === 1) return [strs]

    // 2
    const words = new Map()

    // 3
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i]
        const wordSorted = [...word].sort().join('') // 4

        // 5
        if (words.size > 0 && words.has(wordSorted)) {
            words.get(wordSorted).push(word)
        } else {
            words.set(wordSorted, [word])
        }
    }

    // 6
    // return result
    return [...words.values()]
};
