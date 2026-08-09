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
let global = "Global";

function test() {
    let local = "Local";

    console.log(global); // ✅
    console.log(local);  // ✅
}

// test();

console.log(global); // ✅
// console.log(local); ❌