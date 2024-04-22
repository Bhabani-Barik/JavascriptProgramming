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


// Approach 2: Using Arithematic Operation

let x = 10;
let y = 20;

console.log(`Before swaping: x = ${x}`);
console.log(`Before swaping: y = ${y}`);

x = x + y ; //10=10+20 now x would be 30
y = x - y; // 20=30-20 now y would be 10
x = x - y; //30=30-10 now x would be 20

console.log(`Before swaping: x = ${x}`);
console.log(`Before swaping: y = ${y}`);


