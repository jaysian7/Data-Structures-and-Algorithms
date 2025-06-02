/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    // sort array by birth date
 logs.sort((a, b) => a[0] - b[0]);
 
 // set default population/year
 let maxPop = 0; 
 let year = 0; 
 
 //where to begin iterating through logs array
 let start = 0; 
 
 //iterate through all years between first birth/end constraint
 for(let y = logs[0][0]; y <= 2050; y++) {
 
     //start counting population for the year
     let pop = 0; 
     
     //search through all logs after start index
     for(let i = start; i < logs.length; i++) {
     
         // if they were born after this year break the loop 
         if (logs[i][0] > y) break;	
         
         //if they died after this year 
         if (logs[i][1] > y) {
             pop++; // increase the population for this year
             continue; // go on to the next year
         
         // if they died before this year and nothing to check before this
         } else if (i == start) {
             start++; // increase the index for future checks of the log array
         }
     }
     
     // if this year had a greater population than the current max
     if (pop > maxPop) {
         maxPop = pop; // reset the max to this population
         year = y; // store this year
     }
 }
 return year;  // return year with greatest population 
};