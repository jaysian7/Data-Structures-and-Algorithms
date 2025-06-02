/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];

    // Loop throuh all numbers
    for (let number = left; number <= right; number++) {
        let digits = number;
        let valid = true;

        // Loop through all number digits
        while(digits > 1) {
            let lastDigit = digits % 10;

            // Check if zero or not self dividing
            if (!lastDigit || number % lastDigit !== 0) {
                valid = false;
                break;
            }

            // Remove last digit from the number
            digits = Math.floor(digits/10);
        }

        if (valid) {
            result.push(number);
        }
    }

    return result;
};
