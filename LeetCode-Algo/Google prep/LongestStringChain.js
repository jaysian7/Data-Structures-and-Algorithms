/**
 * @param {string[]} words
 * @return {number}
 */
/*
What we can do is whenever we encounter a new word, we will find all possible sequences with this word as the 
last word in the sequence. Then, we will store the length of the longest possible sequence that ends with this word.
We will use a map for this where each key will be an ending word and the value will be the length of the longest 
possible word sequence ending with this word. 
*/
var longestStrChain = function(words) {
    let memory = {}, resultLength = 0;
    // Sort the list in terms of word length
    words.sort((a,b) => a.length - b.length);
    for (let word of words) {
        let presentLength = 1;
        // Find all possible predecessors for the current word by removing one letter at a time
        for (let i =0; i<word.length; i++){
            //remove the current ith char from the string
            predecessor = word.slice(0,i) + word.slice(i+1);
            // search that string in memory and store the max in presentLength
            presentLength = Math.max(presentLength, (memory[predecessor] || 0)+1)
        }
        // holds the current longest chain count;
        resultLength = Math.max(presentLength, resultLength);
        memory[word] = presentLength;
    }
    return resultLength;
};