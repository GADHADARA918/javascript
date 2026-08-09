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

// const promise = new Promise((resolve, reject) => {
//     let success = false; // Change this to true to resolve the promise
//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });
// promise
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// async/await

//  const getData = () => {
//     return Promise.resolve("user Data");
//  }
//   const showData = () => {
//     const data = await getData();
//     console.log(data);
//  }
// function getData() {
//     return Promise.resolve("User Data");
// }

// async function showData() {
//     const data = await getData();
//     await new Promise(resolve => setTimeout(resolve, 5000));

//     console.log(data);
// }

// showData();

// event loop

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

//Microsoft Queue
console.log("1");

setTimeout(() => {
    console.log("2");
}, 1000);

Promise.resolve()
.then(() => {
    console.log("3");
},2000);

console.log("4");