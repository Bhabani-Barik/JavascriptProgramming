/**Javascript program to check if a number is Odd or Even. 
    Even = {2k : k ∈ Z}
    Odd = {2k + 1 : k ∈  Z}
    where k is an integer.

-  Check if a Number is Odd or Even, in several way i.e- 
    1. Using the modulo operator
    2. Using the Bitwise & operator
    3. Using the Bitwise OR operator ( || )
    4. using Ternary Operator
*/
// Approach 1: Using the modulo operator
function isEven(n) {
    return (n % 2 == 0);
}

let n = 101;
 
isEven(n) ? console.log("Even") : console.log("Odd");

// Approach 2: Using Bitwise & Operator
function checkOddOrEven(n) {
    if ( n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is Even";
}
console.log(checkOddOrEven(12)); //odd
console.log(checkOddOrEven(1231)); //even

//Approach 3: Using Bitwise OR Operator ( || )

function oddOrEvenCheck(number) {
    return ( number | 1) === number ? "odd" : "Even";
}
console.log(oddOrEvenCheck(14));
console.log(oddOrEvenCheck(17));