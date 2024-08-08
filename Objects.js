// Objects
// student object
const student = {
  firstName: "Jack",
  rollNo: 32,
};

console.log(student);

// Output: { firstName: 'Jack', rollNo: 32 }

// Access Object Properties
const dog = {
  name: "Rocky",
};

// access property
console.log(dog.name);

// Output: Rocky

// 2. Using Bracket Notation

const cat = {
  name: "Luna",
};

// access property
console.log(cat["name"]);

// Output: Luna

// Operations
// 1. Modify Object Properties

const person = {
  name: "Bobby",
  hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// display the object
console.log(person);

// Output: { name: 'Bobby', hobby: 'Singing' }

// 2. Add Object Properties
person.age = 21;
console.log(person);

// 3. Delete Object Properties
const employee = {
  name: "Tony",
  position: "Officer",
  salary: 30000,
};

// delete object property
delete employee.salary;

// display the object
console.log(employee);

// Output: { name: 'Tony', position: 'Officer' }

// Objects Methods
const person1 = {
  name: "Bob",
  age: 30,

  // use function as value
  greet: function () {
    console.log(this);
    console.log(`${this.name} says Hi!`);
  },
};

// call object method
person1.greet(); // Bob says Hi!
