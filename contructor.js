// JavaScript Constructor Function
// In JavaScript, a constructor function is used to create and initialize objects.

// constructor function
// function Person() {
//   (this.name = "John"), (this.age = 23);
// }

// // create an object
// const person = new Person();

// // print object attributes
// console.log(person.name);
// console.log(person.age);

// Output:
// John
// 23

// constructor function with parameters
function Person(person_name, person_age, person_gender) {
  // assign parameter values to the calling object
  (this.name = person_name),
    (this.age = person_age),
    (this.gender = person_gender),
    (this.greet = function () {
      return `Hi ${this.name}`;
    });
}

// console.log(new Person());

// create objects and pass arguments
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// access properties
console.log(person1.name); // John
console.log(person2.name); // Sam
person2.greet();
