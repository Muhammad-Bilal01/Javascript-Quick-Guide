// ---> Type Convertions <---

// In programming, type conversion is the process of converting data of one type to another.
// For example, converting string data to number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion -> Automatic type conversion.
// Explicit Conversion -> Manual type conversion.

// JavaScript Implicit Conversion
// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2;
console.log(result, "-", typeof result);

result = "3" + true;
console.log(result, "-", typeof result);

result = "3" + null;
console.log(result, "-", typeof result);

console.log("_----------------------_ Explicit Conversation ");

// JavaScript Explicit Conversion
// let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof result);

// convert boolean to string
result = String(true);
console.log(result, "-", typeof result);

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof result);
