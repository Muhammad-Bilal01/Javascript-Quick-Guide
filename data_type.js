// ############ DATA Types ##########

// Data types represent the different kinds of values we can use in JavaScript.

// There are altogether 8 basic data types in JavaScript.

/**
 * String -> Text Data -> 'Hello World', "This IS Cow" etc
 * Numbers -> integer or floating point Number -> 3, 3.24, 3e-2
 * BigInt -> An integer with arbitrary precision. -> 900719925124740999n, 1n, etc.
 * Boolean -> Any of two values: true or false. -> true and false
 * undefined -> A data type whose variable is not initialized. -> let a;
 * null -> Denotes a null value. -> let a = null;
 * Symbol -> A data type whose instances are unique and immutable. -> let value = Symbol('hello');
 * Object -> 	Key-value pairs of collection of data. -> let student = {name: "John"};
 */

/**Note: JavaScript data types are divided into primitive and non-primitive types.

-> Primitive Data Types: They can hold a single simple value. String, Number, BigInt, Boolean, undefined, null, and Symbol are primitive data types.
-> Non-Primitive Data Types: They can hold multiple values. Objects are non-primitive data types. */

// JavaScript String
// In JavaScript, strings are surrounded by quotes:

// Single quotes: 'Hello'
// Double quotes: "Hello"
// Backticks: `Hello`

// string enclosed within single quotes
let fruit = "apple";
console.log(fruit);

// string enclosed within double quotes
let country = "Pakistan";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

// JS Numbers
// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);

// Special Numbers

let number1 = 3 / 0;
console.log(number1); // Infinity

let number2 = -3 / 0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
let number3 = "abc" / 3;
console.log(number3); // NaN

// BigInt value
let value1 = 900_719_925_124_740_998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

let value2 = 900719925124740998n;

// JavaScript Boolean

let dataChecked = true;
console.log(dataChecked); // true

let valueCounted = false;
console.log(valueCounted); // false

// JavaScript undefined
let name;
console.log(name); // undefined

// JavaScript null
let number = null;
console.log(number); // null

// console.log(wew); // Not Defined

// JavaScript Symbol
// two symbols with the same description
let sym1 = Symbol("programiz");
let sym2 = Symbol("programiz");

console.log(sym1 === sym2); // false

// JavaScript Object
// An Object holds data in the form of key-value pairs.

let student = {
  firstName: "John",
  lastName: null,
  class: 10,
};

console.log(student);
