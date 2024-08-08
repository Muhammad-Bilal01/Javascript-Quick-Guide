// Local Scope
/*
function greet() {
  // local variable
  let message = "Hello";

  console.log(`Local: ${message}`);
}

greet();

// try to access message variable
// outside the greet() function
console.log(`Global: ${message}`);
*/

// Global Scope

/*


// declare global variable
var message = "Hello";

function greet() {
  console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);
*/

// Block Level Scope
function display_scopes() {
  // declare variable in local scope
  let message = "local";

  if (true) {
    // declare block-level variable
    let message = "block-level";

    console.log(`inner scope: ${message}`);
  }

  console.log(`outer scope: ${message}`);
}

display_scopes();
