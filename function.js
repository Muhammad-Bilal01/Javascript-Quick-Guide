// JavaScript Function and Function Expressions

// create a function named greet()
function greet() {
  console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function () {
  console.log("PI = 3.14");
};

// call the greet() function
greet();

// call the reply() function
displayPI();

// Output:
// Hello World!
// PI = 3.14

// JavaScript Function Arguments

// function with a parameter called 'name'
function greet(name) {
  console.log(`Hello ${name}`);
}

// pass argument to the function
greet("John");

// Output: Hello John

// function with two arguments
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`Sum: ${sum}`);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9

// The return Statement

// function to find square of a number
function findSquare(num) {
  // return square
  return num * num;
}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);

// The return Statement Terminates the Function
function display() {
  console.log("This will be executed.");

  return "Returning from function.";

  console.log("This will not be executed.");
}

let message = display();
console.log(message);
