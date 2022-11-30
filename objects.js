// We want to MODEL an EPICODE student in our JS program.
// To model a real-wolrd entity into your program, first
// you need to think about what are the properties
// of that entity that you need in your program.

// Of an EPICODE student we care about:
// - name
// - surname
// - age
// - if they have a webcam or not

let student = {
  name: "Eric", // property of the object, of type STRING
  surname: "Smith", // property of the object, of type STRING
  age: 20, // property of the object, of type NUMBER
  hasWebcam: true, // property of the object, of type BOOLEAN
};

// key: value structure, because every property has a KEY and a VALUE
// The order of the properties is not relevant and for JS it doesn't matter.
// This means that you can access a property called 'name', but you
// cannot say "Give me the first property...".

console.log(student);
console.log(typeof student); // This will have type 'object'
// It's called a structural data type because
// it is a structure that cointain more than one value

console.log("\n-----------ACCESSING/READING OBJECT PROPERTIES------------\n");

// We want to print just the name and the surname of the student,
// in a nice way
console.log(
  "The name and surname of the student are: ",
  student.name,
  student.surname
);

console.log("\n-----------MODIFYING OBJECT PROPERTIES------------\n");

// Suppose that the webcam is not working anymore...
// we change the value of the hasWebcam property
student.hasWebcam = false;
console.log("Webcam now broken...here's the studen object after this change:");
console.log(student);

console.log("\n-----------ADD NEW OBJECT PROPERTIES------------\n");

student.discordHandle = "@eric";
console.log("Adding a new property to the object:");
console.log(student);

console.log("\n-----------REMOVING OBJECT PROPERTIES------------\n");

delete student.hasWebcam;
console.log("We don't care about hasWebcam anymore, we delete the property.");
console.log(student);

console.log(
  "\n---------------ALTERNATIVE WAY TO ACCESS PROPERTIES-------------\n"
);

// We used the dot notation to access/modify/add properties.
// There is also another way to do it:

console.log("The age of the student is:", student["age"]);
// This is the same as reading the age using student.age

// This alternative way to access properties, allows you to
// use a variable as the key...

let propertyToAccess = "age";
console.log("The age of the student is:", student[propertyToAccess]);
// This thing of using a dynamic value, a variable, as key to access
// a property, can be done ONLY WITH THIS SQUARE BRACKETS NOTATION.

console.log("\n---------------OBJECTS & IF STATEMENT EXAMPLE-------------\n");

// We have a student

let student2 = {
  name: "John",
  surname: "Doe",
  age: 15,
  discordHandle: "#jd",
};
// ^ In objects we use curly braces to tell JavaScript that we are defining a new object,
// that we are creating a new object. Inside the braces, we list the properties.

// We want to print different messages if the student is overage (18 or older), or younger
if (student2.age >= 18) {
  // Here, the curly braces delimit a CODE BLOCK --> a set of instructions/statement to be executed
  console.log("Congratulations!");
  console.log(student2.name, student2.surname, "can access the course 🎓");
} else {
  console.log("Too young!");
  console.log("Come back in a few years :)");
}

console.log("\n-----------RENAMING A PROPERTY------------\n");

// We cannot really do it, but we can create a new property and delete the previous one
// We want to rename surname into lastName

student2.lastName = student2.surname;
// We create a new property, lastName, and put the value of surname there
delete student2.surname;
console.log(student2);

console.log("\n--------------COMPARING THE TWO STUDENTS--------------\n");

// We can compare properties among objects.
// Like that, we compare the VALUES inside name and surname for student and student2
if (student.name === student2.name && student.surname === student2.surname) {
  console.log("Student 1 and 2 have the same name and surname!");
}

console.log(
  "\n-------------------LET'S CREATE A DICTIONARY OF WORDS-------------\n"
);

// We decide to represent a dictionary as an object.
let dictionary = {
  banana: "A yellow fruit.",
  apple: "A usually red/yellow/green fruit that grows on trees",
  pineapple: "A tropical sweet fruit.",
  // .........
};

// We ask the user what is the definition they're looking for...
// The user tells us and we put the user input in a variable
let wordToSearch = "apple";

// 1) We access the value given the key...
// let definition = dictionary.wordToSearch // This is looking for a property with key "wordToSearch"

// If you want to look for a value in an object, but the key is variable...
// ... then you need to use the square brackets notation
let definition = dictionary[wordToSearch];

if (definition !== undefined) {
  // This is how you check if a property exists.
  // You try to access it, and check you get undefined or not...

  console.log("The definition you were looking for is:", definition);
} else {
  console.log("I did not find the word you're looking for.");
}
