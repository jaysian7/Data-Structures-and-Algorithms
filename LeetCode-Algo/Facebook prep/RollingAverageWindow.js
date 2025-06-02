function rollingAverage(arr, windowSize) {
    if (windowSize <= 0 || windowSize > arr.length) {
      throw new Error('Window size must be positive and less than or equal to the length of the array.');
    }
  
    let result = [];
    let windowSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      windowSum += arr[i]; // Add the next element to the sum
  
      if (i >= windowSize - 1) { // Check if we've hit the window size
        result.push(windowSum / windowSize); // Push the average to the result array
        windowSum -= arr[i - (windowSize - 1)]; // Remove the element going out of the window
      }
    }
  
    return result;
  }
  
  // Example usage:
  let exampleArray = [1, 2, 3, 4, 5];
  let windowSize = 3;
  console.log(rollingAverage(exampleArray, windowSize)); // Should log: [2, 3, 4]
  