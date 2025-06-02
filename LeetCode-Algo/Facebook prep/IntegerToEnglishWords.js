/**
 * @param {number} num
 * @return {string}
 */

/*
Implementation:
-Break down the number into units, tens, hundreds, thousands, and so on
-Map them to their corresponding word representations.
*/
function numberToWords(num) {
    if (num === 0) return 'Zero';

    const below20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const chunks = ['Thousand', 'Million', 'Billion'];

    function inWords(n) {
        if (n < 20) return below20[n];
        else if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + below20[n % 10] : '');
        else return below20[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + inWords(n % 100) : '');
    }

    let result = '';
    for (let i = 0; num > 0; i++) {
        if (num % 1000 !== 0) {
            result = inWords(num % 1000) + (i ? ' ' + chunks[i - 1] : '') + ' ' + result;
        }
        num = Math.floor(num / 1000);
    }

    return result.trim();
}