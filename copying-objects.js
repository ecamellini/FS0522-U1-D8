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

console.log("\n--------NESTING OBJECTS------------\n");

let user = {
  username: "@john",
  isEmailVerified: true,
};

// You can nest objects inside objects...
// Object properties can be other objects
user.address = {
  city: "London",
  street: "State Street",
  number: 55,
};

console.log(user);

console.log(user.username, "lives in", user.address.city);

console.log("\n--------COPYING WITH NESTED OBJECTS------------\n");

// This will copy all the properties of user inside
// a new empty object {}, and then the result is put inside
// the variable newUser.
// We say that Object.assign performs a SHALLOW COPY:
// only first level properties are copied, not nested objects.
let newUser = Object.assign({}, user);

// It does not actually copy nested objects
// IT DOES NOT ACTUALLY COPY .address in this case.

// In this case, if you want to actually copy also the address,
// so that it is unrelated from the original address...
newUser.address = Object.assign({}, user.address);

console.log(newUser);
