/** Javascript program to Add Float Numbers. 
 - There are two methods to solve this problem, i.e-
    1. Using parseFloat() and toFixed() method
    2. Using parseFloat() and Math.round() method
*/

// Approach 1: Using parseFloat() and toFixed() method
let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);
function sumOfFloatNum() {
    console.log("2.3 + 2.4 = " + (parseFloat('2.3') + parseFloat('2.4')).toFixed(2));
}
sumOfFloatNum(); 

// Approach 2: Using parseFloat() and Math.round() method

let output = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);

function sum(){
    console.log("2.3 + 2.4 = " + Math.round((parseFloat('2.3') + parseFloat('2.4')) * 100) / 100);
}
sum();