/** Javascript Program to Add Two Numbers.
 *  
 * There are several methods that can be used to Add numbers in javascript. Which are listed below:
 *  1. Using + Operator
 *  2. Using function
 *  3. Using Arrow function
 *  4. Using Addition Assignment Operator(+=)
 */

/** 1. Using + Operator */
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum); //30

/** 2.Using function */
// adding two numbers using a function in JavaScript involves defining a custom function that takes two parameters, adds them, and returns the result.

function additionFunction (a , b){
    return a + b;
}
let numOne = 10;
let numTwo = 30;
let sumResult = additionFunction(numOne, numTwo);
console.log("Sum of givren number is: ", sumResult); //40


/**3. Using Arrow function */
// Adding two numbers using an arrow function in JavaScript involves creating a concise function syntax that adds parameters and returns the sum.
let addition = (a, b) => a + b;
let numberOne = 20;
let numberTwo = 40;
let result = addition(numberOne, numberTwo);
console.log("Result is: ", result); //60

/** 4. Using Addition Assignment Operator (+=) */
let a = 20;
let b = 30;

//Equivalent to a = a + b;
a += b;
console.log("Sum of the given number is: ", a);