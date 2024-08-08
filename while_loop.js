// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
  console.log(i);
  i += 1;
}

let num = 0,
  sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {
  // add all positive numbers
  sum += num;

  // take input from the user
  //   num = parseInt(prompt("Enter a number: "));
  num = -5;
}

// last, display sum
console.log(`The sum is ${sum}`);

// do While

let j = 3;

// do...while loop
do {
  console.log(j);
  j--;
} while (j > 0);
