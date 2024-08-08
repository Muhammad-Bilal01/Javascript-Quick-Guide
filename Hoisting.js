// Hoisting

// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
// use test variable before declaring
console.log(test);

// let doesn't support hoisting
// console.log(check);

// declare and initialize test variable
var test = 5;
let check = 10;
// Output: undefined

// Function Hoisting
// function call
greet();

// function declaration
function greet() {
  console.log("Welcome to Programiz.");
}

// arrow function does not support hoisting
