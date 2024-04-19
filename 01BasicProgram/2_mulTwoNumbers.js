/** Javascript Program for Multiplication of Two Numbers.
 * 
 * 1. Using "*" Operator
 * 2. Using function
 * 3. Using Arrow function
 * 4. Using Multiplication assignment operator
 * 5. Using for loop
 */

let num1 = 10;
let num2 = 5;

// 1 Using "*" Operator
let mul = num1 * num2;
console.log("Multiplication of two number is: ", mul);

// 2. Using functiuon
//Functions are the building blocks of some specific code that carry out specific tasks.

function mulTwoNumbers(a, b){
    return a * b;
}

console.log("Multiplication of two number is: ", mulTwoNumbers(num1, num2));

// 3. Using Arrow funtion
let result = (a, b) => {
    return a * b;
}
console.log("After Multiplication: ", result(num1, num2));

// 4. Using Multiplication Assignment Operator

num1 *= 20;
console.log("Multiplication is: ", num1);

//5. Using for loop
// Function for multiplication 
function multiply(a, b) { 
    let result = 0; 
    for (let i = 1; i <= b; i++) { 
        result += a; 
    } 
    return result; 
} 
  
// Calling function and storing the returned value 
let output = multiply(5, 10); // 50 
  
// Display the result 
console.log("output: ",output);