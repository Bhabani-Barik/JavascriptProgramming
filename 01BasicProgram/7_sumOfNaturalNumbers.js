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
