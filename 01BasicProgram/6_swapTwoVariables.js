/** Javascript program  swap two variables.
 *  
 * 1. Using Temporary variable
 * 2. Using Arithematic Operation
 * 3. Using Destructing Assignment
 * 4. Using XORBitwise operator
 * 
 */

// Approach 1: Using Temporary Operator

let a = 20;
let b = 30;
let temp;

console.log(`Before swaping: a = ${a}`); // 20
console.log(`Before swaping: b = ${b}`); // 30

temp = a;
a = b;
b = temp;

console.log(`After swaping: a = ${a}`); // 30
console.log(`After swaping: b = ${b}`); //20


