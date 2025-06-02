class Solution {
    constructor(nums) {
        this.original = nums.slice(); // Store a copy of the original array
        this.array = nums.slice(); // Copy to modify for shuffle
    }

    reset() {
        // Return a copy of the original array to reset
        this.array = this.original.slice();
        return this.array;
    }

    shuffle() {
        // Implement the Fisher-Yates shuffle
        for (let i = 0; i < this.array.length; i++) {
            // Random index from i to the end of the array
            const j = i + Math.floor(Math.random() * (this.array.length - i));
            // Swap elements at indices i and j
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        }
        return this.array;
    }
}

// Example usage
const nums = [1, 2, 3];
const solution = new Solution(nums);

console.log(solution.shuffle()); // Output: Random shuffling of [1,2,3]
console.log(solution.reset());   // Output: [1,2,3]
console.log(solution.shuffle()); // Output: Another random shuffling of [1,2,3]
