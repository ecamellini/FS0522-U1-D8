let person1 = {
  name: "Bob",
  surname: "Smith",
  age: 20,
};

let person2 = person1;

console.log("Person 1:", person1);
console.log("Person 2:", person2);

console.log("\nLet's change the name of Person 1...");
person1.name = "Bobby";

console.log("Person 1:", person1);
console.log("Person 2:", person2);

console.log("\nLet's change the age of Person 2...");
person2.age = 25;

console.log("Person 1:", person1);
console.log("Person 2:", person2);

// Objects are not really values that you can just use and copy
// around normally...
// When you assign a variable containing an object to another variable,
// actually the new variable will refer to THE SAME object,
// and so it will modify also the previous variable content.

// This happens only with values that are NOT PRIMITIVE DATA TYPES.
// If you do the same with strings, number, booelan, this does not happen!

console.log("\n--------------ACTUALLY COPYING OBJECTS-------------\n");

let newPerson = {}; // Empty object, a new object
newPerson = Object.assign(newPerson, person1);
// Copying all the properties of person1 inside newPerson.

newPerson.name = "Paul";
console.log("New person:", newPerson);
console.log("Person 1:", person1);
console.log("Person 2:", person2);
