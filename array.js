console.log("\n---------------ARRAYS----------------\n");

let arrayOfAnimals = ["Dog", "Cat", "Turtle", "Horse"];

// Arrays are a collection of values...
// just like objects.

// OBJECTS VS ARRAYS:
// - Objects: values are identified and accessed through their KEY
// - Arrays: values are identified and accessed through their POSITION in the list

// We call the values inside the array ITEMS or ELEMENTS

console.log(arrayOfAnimals);

console.log("\n--------READING/ACCESSING VALUES FROM AN ARRAY------------\n");

console.log("First element:", arrayOfAnimals[0]); // WE START COUNTING FROM ZERO
console.log("Second element:", arrayOfAnimals[1]);

// The following, instead, will print undefined -- we can only access values by
// their position, their INDEX, and values do not have any key/any name.
// console.log(arrayOfAnimals.cat);

console.log("\n--------------MIXING TOGETHER ARRAYS & OBJECTS----------\n");

// Each product has a name, and a price
let arrayOfProducts = [
  { name: "iPhone 15", price: 99, tags: ["smartphone", "tech"] },
  { name: "Laptop", price: 1200, tags: ["pc", "tech", "windows"] },
  { name: "Power adapter", price: 20, tags: ["accessories", "tech"] },
];

// Suppose that I want to show the price of the second product.
console.log(arrayOfProducts);
console.log("Price of the second product:", arrayOfProducts[1].price);

// We want to print all the tags of the first product
console.log("Tags of the first product:", arrayOfProducts[0].tags);

// We want to print just the second tag of the first product
console.log("Second tag:", arrayOfProducts[0].tags[1]);

console.log("\n--------------ARRAY OF ARRAYS-------------\n");

// You nest arrays inside arrays when you want to reprent tables/grids/matrixes
let tableOfNumbers = [
  [1, 12, 32], // Row 1
  [2, 0, 21], // Row 2
  [1, 0, 1], // Row 3
];

console.log(tableOfNumbers);

// We want to access the second element of the third row
console.log("Second element, third row:", tableOfNumbers[2][1]);
