/**
 * @param {number[]} height
 * @return {number}
 */

 /* Brute Force Approach
 */

// function trap(height) {
//   if (height == null || height.length === 0) return 0;
//
//   let res = 0;
//   for (let i = 0; i < height.length; i++) {
//     let lMax = 0;
//     let rMax = 0;
//
//     for (let j = 0; j < i; j++) {
//       lMax = Math.max(lMax, height[j]);
//     }
//     for (let j = i + 1; j < height.length; j++) {
//       rMax = Math.max(rMax, height[j]);
//     }
//
//     const water = Math.min(lMax, rMax) - height[i];
//     if (water > 0) res += water;
//   }
//
//   return res;
// }

/* Pseudocode: Two Pointer Approach
-Initialize left pointer to 0, and right pointer to size-1
-While left < right, do:
 -If height[left] is smaller than height[right]
  -If height[left] greater than or equal to left_max, update left_max
  -Else add left_max - height[left] to ans
  -Add 1 to left (move pointer forward)
 -Else:
  -If height[right] greater than or equal to right_max, update right_max
  -Else add right_max - height[right] to ans
  -Subtract 1 from right (move pointer backwards)

*/

function trap(height) {
    let left = 0, right = height.length - 1;
    let ans = 0, left_max = 0, right_max = 0;

    while (left<right) {
        if (height[left] < height[right]) {
            height[left] >= left_max ? (left_max = height[left]) : ans += (left_max-height[left]);
            ++left;
        } else {
            height[right] >= right_max ? (right_max = height[right]) : ans += (right_max-height[right]);
            --right;
        }
    }

    return ans;
}
