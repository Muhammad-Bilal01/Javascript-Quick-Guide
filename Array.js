// JavaScript Array

const age = [17, 18, 15, 19, 14];

let numbers = [10, 30, 40, 60, 80];

// access first element
console.log(numbers[0]); // 10

// access third element
console.log(numbers[2]); // 40

// Add Element to an Array

numbers.push(24);
console.log(numbers);

// 2. Using the unshift() Method
numbers.unshift(32);
console.log(numbers);

// Remove Elements From an Array
numbers = [1, 2, 3, 4, 5];

// remove one element
// starting from index 2
numbers.splice(2, 1);

console.log(numbers);

// Output: [ 1, 2, 4, 5 ]

// numbers.splice(1, 3);
// console.log(numbers);

let sum = 0;
numbers.forEach((num) => {
  console.log(num);
  sum += num;
});
console.log(sum);
