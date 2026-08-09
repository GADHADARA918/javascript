// // variables
// var a = 10; // var is function-scoped
// let b = 20; // let is block-scoped
// const c = 30; // const is block-scoped and immutable
// console.log(a + b + c);

// // Data types
// let name = "Tom"; // String
// let age = 22; // Number
// let isActive = true; // Boolean
// let data = null; // Null
// let value; // Undefined
// let user = { name }; // Object
// let skills = ["JS", "Node.js", "Express.js"]; // Array

// // Operators
// let a = 10;
// let b = 5;

// console.log(a + b); // 15
// console.log(a > b); // true
// console.log(a === b); // false
// console.log(a && b); // 5

// // condition
// let age = 20;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// // All Looping in JavaScript
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1;
// // while loop
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// // for ...of loop sort out of array
// const frameworks = ["React", "Vue", "Next.js"];

// for (const framework of frameworks) {
//   console.log(framework);
// }
// // for ...in loop sort out of object
// const developer = {
//   name: "tom ",
//   role: "Frontend Engineer",
//   experience: "3 Years",
// };

// for (const key in developer) {
//   // Accessing the key name and its value
//   console.log(`${key}: ${developer[key]}`);
// }
// // 

// 1. Raw data: Items in a user's shopping cart
const shoppingCart = [
  { id: 101, name: "Gaming Mouse", price: 1500, stock: true, rating: 4.5 },
  { id: 102, name: "Mechanical Keyboard", price: 4500, stock: true, rating: 4.8 },
  { id: 103, name: "USB-C Cable", price: 400, stock: false, rating: 3.9 },
  { id: 104, name: "Wireless Headset", price: 3500, stock: true, rating: 4.2 }
];

// 1. filter()
const availableItems = shoppingCart.filter(item => item.stock === true);
console.log("Available Items:", availableItems);


// 2. map()
// Problem: Apply a 10% Sunday discount coupon to all available items.
const discountedItems = availableItems.map(item => {
  return {
    ...item,
    finalPrice: item.price * 0.9 // 10% off
  };
});
console.log("Discounted Items:", discountedItems);


// 3. reduce()
const grandTotal = discountedItems.reduce((total, item) => total + item.finalPrice, 0);
console.log(`Grand Total to Pay: ₹${grandTotal}`); // Output: ₹8550


// 4. find()
const premiumItem = discountedItems.find(item => item.price > 4000);
console.log("Premium Item for Free Gift:", premiumItem.name); // Output: Mechanical Keyboard


// --- 5. findIndex() ---
const headsetIndex = discountedItems.findIndex(item => item.name === "Wireless Headset");
console.log(`Headset is at index: ${headsetIndex}`); // Output: 2


//6. every()
const isAllHighRated = discountedItems.every(item => item.rating > 4.0);
console.log("Are all items high rated?:", isAllHighRated); // Output: true


//7. some()
const triggerAlert = discountedItems.some(item => item.finalPrice > 5000);
console.log("Trigger budget alert?:", triggerAlert); // Output: false


//8. forEach()
console.log("\n--- YOUR INVOICE ---");
discountedItems.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name} - ₹${item.finalPrice}`);
});

// function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30

//  arrow function
const multiply = (a, b) => a * b;

console.log(multiply(5, 2)); // 10

// Array of objects
const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);

fruits.push("Orange");

console.log(fruits);
// number array
const numbers = [1, 2, 3, 4];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n > 2));
// object
const user = {
    name: "Tushar",
    age: 22,
    role: "Backend Developer"
};

console.log(user.name);
console.log(user.role);

// destructuring object
const user = {
    name: "tom",
    age: 22
};

const { name, age } = user;

console.log(name, age);

// destructuring array
const colors = ["Red", "Blue"];

const [first, second] = colors;

console.log(first, second);

