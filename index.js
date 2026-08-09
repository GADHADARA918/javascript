// variables 
var a = 10; // var is function-scoped
let b = 20; // let is block-scoped
const c = 30; // const is block-scoped and immutable
console.log(a+b+c);

// Data types
let name = "Tom";     // String
let age = 22;            // Number
let isActive = true;     // Boolean
let data = null;        // Null
let value;              // Undefined
let user = { name };    // Object
let skills = ["JS", "Node"]; // Array

// Operators
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a > b); // true
console.log(a === b); // false
console.log(a && b); // 5

// condition
let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}