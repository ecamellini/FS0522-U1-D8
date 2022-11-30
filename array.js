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

console.log("\n--------LENGTH OF AN ARRAY----------\n");

let arrayOfNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// In real-world application we will receive data from the server, from the user...
// and we don't know in advance how long is the array of data that we are dealing with.

console.log(arrayOfNumbers);
console.log("Length of the array", arrayOfNumbers.length);

console.log("Length of the array of products:", arrayOfProducts.length);

// In our online shop, we have a shipping cost of 2 EUROs for every item in the cart.
// Suppose our arrayOfProducts is the cart.
let totalShippingCost = arrayOfProducts.length * 2;
console.log("Total shipping cost: ", totalShippingCost);

console.log(
  "The length of the second row in our table is:",
  tableOfNumbers[1].length
);

console.log("\n--------ADDING AN ELEMENT AT THE END OF AN ARRAY----------\n");

// This will add 123 to the array, as the LAST element
arrayOfNumbers.push(123);

console.log("Adding element 123 to the array of numbers:", arrayOfNumbers);

console.log("\n--------------REMOVE THE LAST ITEM OF AN ARRAY-------------\n");

// This removes the last element from an array
arrayOfNumbers.pop();
console.log("Removing the last element:");
console.log(arrayOfNumbers);

console.log("\n------------CONCATENATING TWO ARRAYS-------------\n");

let anotherArrayOfNumbers = [1, 2, 3, 4];

// We want to create another array that contains all the numbers
// from this array and from the array of numbers above
let allNumbers = arrayOfNumbers.concat(anotherArrayOfNumbers);
arrayOfNumbers.con;
// THIS DOES NOT MODIFY arrayOfNumbers - it gives a new array

console.log("All numbers:", allNumbers);

console.log("\n-------------MIXING DATA TYPES-------------\n");

console.log(allNumbers.concat(arrayOfProducts));

let mixed = [12, "A string here", true];
// UNLESS YOU ARE INSIDE AN OBJECT,
// NEVER MIX DATA TYPES TOGETHER. TRY TO NEVER HAVE AN ARRAY OF ELEMENTS
// THAT HAVE DIFFERENT TYPES OF DATA

console.log("\n ----------A TRICK TO COPY AN ARRAY-----------");

// Actually creating a new array, which is a copy of another array,
// but without any relation to the starting array

let newArrayOfNumbers = arrayOfNumbers.concat([]); // This is the empty array: []
console.log(newArrayOfNumbers);
// If I concatenate and EMPTY array to an existing array...
// ... I will get an actual copy of it, with the same elements

// This is a trick, but if you Google copying an array in JS
// you will find many different ways of doing this.

console.log(
  "\n ----------INSERT ELEMENTS IN THE MIDDLE, DELETE ELEMENTS IN THE MIDDLE-----------"
);

arrayOfNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// We want to insert a new number in position 2 inside our arrayOfNumbers
arrayOfNumbers.splice(2, 0, 25);
// splice takes 3 values:
// 1) the first one is the position where we want to modify the array
// 2) the number of elements to remove after that position
// 3) the element / elements to add there

console.log("We added number 25 in position 2:", arrayOfNumbers);

// We want to delete the elements in position 5 and 6
arrayOfNumbers.splice(5, 2);
// We operate at position 5 and remove 2 elements, the 5th and the 6th
console.log("We removed the 5th and the 6th elements:", arrayOfNumbers);
