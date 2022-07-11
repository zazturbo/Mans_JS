// let a = 3;
// function addTwo(x) {
//   let ret = x + 2;
//   return ret;
// }
// let b = addTwo(a);
// console.log(b);

// let c = addTwo(a);
// console.log(c);

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);
