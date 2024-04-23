/** Javascript Program to find the sum of Natural Numbers.
 * 
 * 1. Using for loop
 * 2. Using Recursion
 * 3. Using Mathmatical Formula
 */

// Approach 1: for loop
function findSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const n = 5;
console.log(findSum(n)); //15

//Approach 2 : Recursion (Recursion is a function calling itself again and again until it doesn’t have left with it anymore.)

function findSumOfNaturalNums(n) {
    if ( n !== 0){
        return n + findSum(n -1);
    } else {
        return n; 
    }
}

// Approach 3 : Using Mathmatical Formula

function sumofNaturalNumbers(n) {
    return n * (n + 1) / 2;
}
const num  = 5;
console.log(sumofNaturalNumbers(n));