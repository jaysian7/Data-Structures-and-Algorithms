function quickSort(arr, left, right) {
  // if left pointer is greater than or equal to right
  if (left >= right) {
    return;
  }

  // Step 1: Pick a pivot point - we will choose the center
  let pivot = arr[Math.floor((left + right) / 2)];

  // Step 2: Partition the array around this pivot - return the index of the partition
  let index = partition(arr, left, right, pivot);

  // Step 3: Sort on the left and the right side
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
}

function partition(arr, left, right, pivot) {
  // Move the left and right pointers in towards each other
  while (left <= right) {
    // Move the left until you find an element bigger than the pivot
    while (arr[left] < pivot) {
      left++;
    }

    // Move the right until you find an element smaller than the pivot
    while (arr[right] > pivot) {
      right--;
    }

    // Then swap
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  // When we get here, everything in this partition will be in the right order
  // We now need to return next partition point - which will be the left
  return left;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
