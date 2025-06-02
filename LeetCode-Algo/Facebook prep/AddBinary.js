/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;

    // Ensure both binary strings have the same length by adding leading zeros
    while (a.length < b.length) {
        a = "0" + a;
    }

    while (b.length < a.length) {
        b = "0" + b;
    }

    // Iterate from right to left, performing binary addition
    for (let i = a.length - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        const sum = bitA + bitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    // If there's a remaining carry, add it to the leftmost bit
    if (carry > 0) {
        result = carry + result;
    }

    return result;
};