/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [result, leftIndex, rightIndex] = [0, 0, height.length - 1];

    while (leftIndex < rightIndex) {
        // calculate the shortest side and the area
        let shortestSide = Math.min(height[leftIndex], height[rightIndex]);
        let area = (rightIndex - leftIndex) * shortestSide;

        // compare area and result to update the result
        result = Math.max(area, result);

        // update the left or right index
        if (height[leftIndex] < height[rightIndex]) leftIndex++;
        else rightIndex--;
    }
    return result;
};
