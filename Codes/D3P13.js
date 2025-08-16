// Merging two objects
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));