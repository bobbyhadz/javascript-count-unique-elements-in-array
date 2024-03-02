// EXAMPLE 1 - Count the Unique Elements in an Array in JavaScript

// ✅ count the unique elements in an array
const arr = ['a', 'b', 'a', 'c', 'b'];

const uniqueCount = new Set(arr).size;
console.log(uniqueCount); // 👉️ 3

// -------------------------------------

// ✅ count the unique elements in an array as an object

const uniqueCount2 = {};

for (const element of arr) {
  if (uniqueCount2[element]) {
    uniqueCount2[element] += 1;
  } else {
    uniqueCount2[element] = 1;
  }
}

console.log(uniqueCount2); // 👉️ { a: 2, b: 2, c: 1 }

console.log(uniqueCount2.a); // 👉️ 2
console.log(uniqueCount2.b); // 👉️ 2
console.log(uniqueCount2.c); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Count the Unique Elements in an Array using `Array.forEach()`

// const arr = ['a', 'b', 'a', 'c', 'b'];

// let uniqueCount = 0;

// arr.forEach((element, index) => {
//   if (arr.indexOf(element) === index) {
//     uniqueCount += 1;
//   }
// });

// console.log(uniqueCount); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the Unique Elements in an Array using a `for` loop

// const arr = ['a', 'b', 'a', 'c', 'b'];

// let uniqueCount = 0;

// for (let index = 0; index < arr.length; index++) {
//   if (arr.indexOf(arr[index]) === index) {
//     uniqueCount += 1;
//   }
// }

// console.log(uniqueCount); // 👉️ 3
