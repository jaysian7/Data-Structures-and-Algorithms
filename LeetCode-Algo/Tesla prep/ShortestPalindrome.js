/**
The idea of this solution is trying to find the palindrome center.
We have 2 pointers 'head' and 'tail pointing to the expected center.
At the begining of each loop, we find neighbors which have the same value, then adjust the pointers.
If s[head] is equals to the s[tail], head--, tail++.
If head is equals to 0, the result is the inverted string behind 'tail'.
Noticed that 1. Palindrome center only existing in the first half of the string.
2. If the center is not a single character, they should be same letters.
*/


/**
* @param {string} s
* @return {string}
*/
var shortestPalindrome = function(s) {
   var prefix = "";
   var pos, head, tail;

    for(pos = head = tail = parseInt(s.length / 2); pos > 0; head = tail = --pos){
       while(head !== 0 && s[head - 1] === s[head]){
           head--; pos--;
       }
       while(tail != s.length - 1 && s[tail + 1] === s[tail]){
           tail++;
       }
       var isSame = true;
       while(head >= 0){
           if(s[head] !== s[tail]){
               isSame = false;
               break;
           }
           head--; tail++;
       }
       if(isSame){
           break;
       }
   }

   for(var k = s.length - 1; k >= tail && k !== 0; k--){
       prefix += s[k];
   }
   return prefix + s;
};
