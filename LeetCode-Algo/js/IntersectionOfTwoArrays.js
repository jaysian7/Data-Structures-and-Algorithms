/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*
The idea is to convert both arrays into sets, and then iterate over the smallest set 
checking the presence of each element in the larger set. Time complexity of this 
approach is O(n+m)\mathcal{O}(n + m)O(n+m) in the average case.
*/
var intersection = function(nums1, nums2) {
    let result = [];
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2);

    let [smallSet , largeSet] = (setNum1.length < setNum2.length) ? [setNum1 , setNum2] : [setNum2 , setNum1];

    smallSet.forEach( num => {
        largeSet.has(num) && result.push(num);
    });

    return result;
};