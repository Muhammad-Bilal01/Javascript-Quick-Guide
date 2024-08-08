// IF Else Operator in JS

// The JavaScript if...else statement is used to execute/skip a block of code based on a condition.

let score = 51;

// check if score is fifty or greater
if (score >= 50) {
  console.log("You passed the examination.");
} else {
  console.log("You failed the examination.");
}

// Output: You failed the examination.

// Program to check if the number is positive

// const number = prompt("Enter a number: ");

let number = 2;

// check if number is greater than 0
if (number > 0) {
  // the body of the if statement
  console.log("positive number");
}

console.log("nice number");

let marks = 60;

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {
  // inner if...else statement
  // Distinction if marks is 80 or above

  if (marks >= 80) {
    console.log("Distinction");
  } else {
    console.log("Passed");
  }
} else {
  console.log("Failed");
}

// Output: Passed
