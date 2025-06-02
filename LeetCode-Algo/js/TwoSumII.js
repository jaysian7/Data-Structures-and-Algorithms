/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left<right) {
        // do some logic here depending on problem
        if (numbers[left] + numbers[right] == target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else if (numbers[left] + numbers[right] > target) {
            right--;
        }
        // do some more logic to decide if left++, right--, or both
    }

    return [-1, -1];
    
};