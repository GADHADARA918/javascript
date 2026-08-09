// CLOSURES
/*const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
*/
// SCOPE
// let global = "Global";

// function test() {
//   let local = "Local";

//   console.log(global);
//   console.log(local);
// }

// test();

// console.log(global);
// console.log(test());

// hosting

// console.log(name); // undefined
// console.log(age); // ReferenceError: age is not defined
// var name = "tom";
// var age = 22;

// this keyword
// const user = {
//     name: "tom",

//     showName() {
//         console.log(this.name);
//     }
// };

// user.showName(); // tom

// callback function
//  const processUser = (name, callback) => {
//     console.log(`hello ${name}`);
//     callback();
//  }
//  processUser("tom", () => {
//     console.log("callback function executed");
//  });

// promise

const promise = new Promise((resolve, reject) => {
    let success = false; // Change this to true to resolve the promise
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});
promise
    .then(data => console.log(data))
    .catch(error => console.log(error));