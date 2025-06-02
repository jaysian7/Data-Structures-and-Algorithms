/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//     sum = '';
//     len1 = num1.length;
//     len2 = num2.length;
//     carry = 0;

//     while(len1 > 0 || len2 > 0 || carry) {
//         num1Digit = +num1.charAt(len1-1);
//         num2Digit = +num2.charAt(len2-1);
//         len1--;
//         len2--;
        
//         digitTotal = num1Digit + num2Digit + carry;
//         carry = Math.floor(digitTotal / 10);
//         digitToAppend = digitTotal % 10;
//         sum = digitToAppend + sum;
//     } 

//     return sum;

var addStrings = function(num1, num2) {
    let sum = '', carry = 0; //initialize sum as empty string, and carry as 0
    let firstNum = num1.split('.')[0], secondNum = num2.split('.')[0]; //get the whole number part for num1 and num 2
    //Get decimal part for num1 and num2, if undefined, then just set to 0
    let firstNumDec = num1.split('.')[1] !== undefined ? num1.split('.')[1] : '0';
    let secondNumDec = num2.split('.')[1] !== undefined ? num2.split('.')[1] : '0'; 
    let len1 = firstNumDec.length; //length of first number decimals part
    let len2 = secondNumDec.length; //length of second number decimals part
    let maxLength = len1>len2 ? len1 : len2; //get max length of the two
	let sumDec = ''; //initialze empty string to keep track of decimal sum
    
	// if firstNumDec or secondNumDec exists
    if (firstNumDec || secondNumDec) {
		//append 0 to end to match decimal numbers with maxLength
		if (len1<maxLength) {
			for (let i=len1;i<maxLength;i++) { firstNumDec += '0'; }
		} else if (len2<maxLength) {
			for (let i=len2;i<maxLength;i++) { secondNumDec += '0';}
		}
    	console.log("firstNumDec ", firstNumDec);
      console.log("secondNumDec ", secondNumDec);
	    while (maxLength > 0) {
			let num1Digit = +firstNumDec.charAt(maxLength-1);
			let num2Digit = +secondNumDec.charAt(maxLength-1);
			maxLength--;
			let digitTotal = num1Digit + num2Digit + carry;
			carry = Math.floor(digitTotal/10);
			let digitToAppend = digitTotal%10;
			sumDec = digitToAppend + sumDec;
		}
    }

    len1 = firstNum.length; //length of first number (whole part)
    len2 = secondNum.length; //length of second number (whole part)
    maxLength = len1>len2 ? len1 : len2; //get max length of the two
    
    while (maxLength > 0) {
        let num1Digit = +firstNum.charAt(len1-1);
        let num2Digit = +secondNum.charAt(len2-1);
        maxLength--;
        len1--;
        len2--;
        
        let digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal/10);
        let digitToAppend = digitTotal%10;
        sum = digitToAppend + sum;
    }
    
    //if carry is greater than 0, append it to whole number
    if (carry>0) {
    	sum = carry + sum;
    }
    //if decimal part exists, append it
    if (sumDec) {
        sum = sum + '.' + sumDec;
    }
    
    return sum;
    
};
