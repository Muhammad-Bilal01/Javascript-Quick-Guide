// JavaScript Operators
console.log(2 + 3); // 5

/**Here is a list of different JavaScript operators you will learn in this tutorial:
 * Arithmetic Operators
 * Assignment Operators
 * Comparison Operators
 * Logical Operators
 * Bitwise Operators
 * String Operators
 * Miscellaneous Operators
 */

console.log("-----------------------------------------------");

// 1. JavaScript Arithmetic Operators
let x = 5;

// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);

console.log("-----------------------------------------------");

// 2. JavaScript Assignment Operators
//  we used the = operator to assign the value 7 to the variable a
// assignment operator

let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5; // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5; // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2; // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2; // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2; // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2; // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);

console.log("-----------------------------------------------");

// JavaScript Comparison Operators
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === "2");

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== "2");

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

console.log("-----------------------------------------------");

//  JavaScript Logical Operators
x = 3;

// logical AND
console.log(x < 5 && x > 0); // true
console.log(x < 5 && x > 6); // false

// logical OR
console.log(x > 2 || x > 5); // true
console.log(x > 3 || x < 0); // false

// logical NOT
console.log(!(x == 3)); // false
console.log(!(x < 2)); // true
