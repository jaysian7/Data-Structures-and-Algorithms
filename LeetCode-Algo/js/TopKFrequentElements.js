/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map(); //create map to store frequency (val) of each number (key)
    let result = []; //initialize empty array to store our return result

    for (let num of nums) { //iterate through each index in nums
        if (map.get(num)) { //if key exists
            map.set(num, map.get(num) + 1); //update the frequency by +1
        } else {
            map.set(num, 1); //else, first time key found, set frequency to 1
        }
    }

    const sortedArray = [...map.entries()].sort((a,b) => b[1] - a[1]); //store sorted array in descending order

    for (let i=0; i<k; i++) { // get top k frequent elements
        result.push(sortedArray[i][0]);
    }

    return result;

};
