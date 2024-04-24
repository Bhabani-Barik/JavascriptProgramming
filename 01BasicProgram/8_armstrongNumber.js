/** Javascript program for Armstrong Numbers.
  
-Armstrong Number: An Armstrong Number is an n-digit number that is the sum of the nth power of its all digits.
- ex: For instance, Consider a 3-digit number, i.e., 153, which is a 3-digit number, & the sum of the cube of all its digits will be the number itself, i.e. 153.

-To generalize it to a particular syntax form, then the following syntax will be used:
    (abcd… = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n)+....)
    Here a,b,c,d,… denotes the Base number & n denotes the exponent number.

-Several methods can be used to check if a number is an Armstrong number or not, which are listed below:
    1. Using toString() and split() method
    2. Using naive method
    3. Using Array.from() method
    4. Using Array Reduce
*/

//Approach 1: Using toString() and split() method

function isArmstrong(number){
    const digits = number.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit),order),0);
    if (sum === number) {
        console.log(
            number + " is an Armstrong Number"
        );
    } else {
        console.log(
            number + " is  not an Armstrong Number"
        );
    }
}

isArmstrong(9474);
isArmstrong(520);

