/*
& - AND - Sets each bit to 1 if both bits are 1
| - OR - Sets each bit to 1 if one of two bits is 1
^ - XOR - Sets each bit to 1 if only one of two bits is 1
*/

function addBinary(a, b) {
    let result = "";
    let carry = 0;

    // Ensure both binary strings have the same length by adding leading zeros
    while (a.length < b.length) {
        a = "0" + a;
    }

    while (b.length < a.length) {
        b = "0" + b;
    }

    // Iterate from right to left, performing binary addition without using '+'
    for (let i = a.length - 1; i >= 0; i--) {
        const bitA = parseInt(a[i]);
        const bitB = parseInt(b[i]);

        const sum = bitA ^ bitB ^ carry;
        carry = (bitA & bitB) | (bitA & carry) | (bitB & carry);
        result = sum + result;
    }

    // If there's a remaining carry, add it to the leftmost bit
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}

// Example usage:
const a = "1011";
const b = "1101";
const sum = addBinary(a, b);
console.log(`The sum of ${a} and ${b} is: ${sum}`);
