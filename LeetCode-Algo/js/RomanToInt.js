var romanToInt = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }
    
    // create hashmap of roman symbols and value
    let map = new Map(), result = 0, index = 0;
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);
    
    // loop through s
    while(index < s.length){
        const currentValue = map.get(s[index]);
        // if current symbol value is less than next symbol value, subtract
        if(currentValue < map.get(s[index + 1])) 
            result -= currentValue
         else 
            result += currentValue
        
        index++;
    }
    return result;
};