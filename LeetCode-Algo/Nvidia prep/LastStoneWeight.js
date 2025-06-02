/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // Create a max heap from the stones array
    // We can simulate a max heap by sorting array in descending order
    stones.sort((a,b) => b - a);
    
    while (stones.length > 1) {
        // Take out the two heaviest stones
        let y = stones.shift(); // Removes the first element (heaviest stone)
        let x = stones.shift(); // Removes the second heaviest stone
        
        // if x != y, the result of smashing them is a new stone with weight y-x
        if (x !== y) {
            stones.push(y-x); // Add the new stone to the array
            stones.sort((a,b) => b - a) // Re-sort to maintain max heap 
        }
    }
    
    // Return weight of last remaining stone, or 0 if no stones left
    return stones.length > 0 ? stones[0] : 0;
};