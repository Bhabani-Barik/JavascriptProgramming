/** Javascript programm to check if a number is positive, negative, or zero 
    1. Using switch statement
    2. Using if else statement
    3. Using ternary operator
*/

// Approach 1: Using switch statement

function numberChecking(num) {
    switch(Math.sign(num)){
        case 1 :
            console.log("The Number is Positive.");
            break;
        case -1:
            console.log("The Number is Negative.");
            break;
        default:
            console.log("The Number is Zero.");
    }
}

numberChecking(12); // Postive
numberChecking(-34); // Negative
numberChecking(0); // zero

// Approach 2: Using if else statement

let number = -0;

if ( number > 0) {
    console.log("The Number is Positive");
} 
else if (number < 0 ) {
    console.log("The Number is Negative");
} 
else {
    console.log("The Number is Zero.")
}

// Approach 3: Using Ternary Operator

