/*
The naive solution would be to sort an array first and then return kth element from the end. That would be an algorithm of O(Nlog⁡N) time complexity and O(1) space complexity. 
This time complexity is not really exciting so let's check how to improve it by using some additional space.

The approach is basically the same as for quicksort. For simplicity let's notice that kth largest element is the same as N - kth smallest element, 
hence one could implement kth smallest algorithm for this problem.

First one chooses a pivot, and defines its position in a sorted array in a linear time. This could be done with the help of partition algorithm.

To implement partition one moves along an array, compares each element with a pivot, and moves all elements smaller than pivot to the left of the pivot.

As an output we have an array where pivot is on its perfect position in the ascending sorted array, all elements on the left of the pivot are smaller than pivot, and 
all elements on the right of the pivot are larger or equal to pivot.

Hence the array is now split into two parts. If that would be a quicksort algorithm, one would proceed recursively to use quicksort for the both parts that would 
result in O(Nlog⁡N)time complexity. Here there is no need to deal with both parts since now one knows in which part to search for N - kth smallest element, 
and that reduces average time complexity to O(N).

Finally the overall algorithm is quite straightforward :

Choose a random pivot.

Use a partition algorithm to place the pivot into its perfect position pos in the sorted array, move smaller elements to the left of pivot, 
and larger or equal ones - to the right.

Compare pos and N - k to choose the side of array to proceed recursively.
*/

var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);
    /**
     * Use pivotIndex as the seperater. If k is smaller than the length of the 
     * right side of the array, the target is in the right side of the array. 
     * If k is larger, the target is in the left side of the array. 
     */
    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }
    // pivotIndex is the index of the target if k equals to the length of the 
    // right side of the array.
    return arr[pivotIndex];
};

function partition(arr, start, end) {
    /**
     * Use the last element as pivot for simplicity. Randomized pivot 
     * is a better way to avoid worst case where the the largest or the smallest 
     * element is always selected.
     */
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    // move all numbers smaller than pivot to the left and larger to the right
    while(i <= j) {    
        while (arr[i] < pivot) {
            i += 1;
        } 
        while (arr[j] > pivot) {
            j -= 1;
        }
        if(i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }   
    }
    // Swap pivot value to the position so that all numbers larger than pivot value 
    // is on the right, and smaller on the left.
    swap(arr, i, end);
    // return the final index where the pivot value is.
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}