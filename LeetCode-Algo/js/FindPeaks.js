// [1, 2, 3, 2, 1, 3]

function findPeaks(arr) {
    const n = arr.length;
    let peaks = [];

    if (n === 0) {
        return peaks;
    }

    if (arr[0] > arr[1]) {
        peaks.push(arr[0]);
    }

    for (let i=1;i<arr.length-1;i++) {
        if (arr[i] < arr[i-1] && arr[i] > arr[i+1]) {
            // if current value is greater than value before and after
            // then we have a peak
            peaks.push(arr[i]);
        }
    }
    // handle last value in our array to see if it's a peak
    if (arr[n-1] > arr[n-2]) {
        peaks.push(arr[n-1]);
    }

    return peaks;
}