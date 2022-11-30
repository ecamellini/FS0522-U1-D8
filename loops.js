console.log("\n----MANUALLY EXECUTING AN OPERATION ON EACH ELEMENT--------\n");

let arrayOfFruits = ["Apple", "Orange", "Banana", "Pineapple"];

console.log(arrayOfFruits[0]);
console.log(arrayOfFruits[1]);
console.log(arrayOfFruits[2]);
console.log(arrayOfFruits[3]);

// Think about what happens when we have 1000 elements?

console.log("\n-----------FOR LOOP-------------\n");

for (let i = 0; i < arrayOfFruits.length; i += 1) {
  // 1) we have a variable called i, it starts from 0
  // 2) the maximum value of this variable will be arrayOfFruits.length
  // 3) every time this block of code is executed, increment by 1

  // Just printing i will just print the number...
  // console.log(i); // At the first round i is 0, a the second round/iteration i is 1, ...
  let currentElement = arrayOfFruits[i];
  console.log(currentElement);

  // This is a block of code, so we can do how many operations we want...
}

// Here I am outside the for loop...
// i DOES NOT EXIST ANYMORE
// console.log(i)

let arrayOfOrders = [
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
  { id: "102983", product: "Wireless Keybard", quantity: 1 },
  { id: "112398", product: "HD Webcam", quantity: 20 },
  { id: "078292", product: "Wireless Display", quantity: 5 },
];

// Sometimes you will see i++ instead of i += 1
// i++ means increment i by 1
for (let i = 0; i < arrayOfOrders.length; i++) {
  let currentOrder = arrayOfOrders[i];
  // Same as i, currentOrder ONLY EXISTS INSIDE THIS CODE BLOCK

  console.log(
    "Here's name and quantity of the order",
    currentOrder.product,
    currentOrder.quantity
  );
}

// HERE CURRENT ORDER DOES NOT EXIST ANYMORE

// If you have an array of 5 elements:
// Length is 5
// But the indexes are 0 1 2 3 4
// That's why we start from 0 and we say < lenght, NOT <=
