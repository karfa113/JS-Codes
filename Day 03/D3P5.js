// Maths in javascript

console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.PI.toFixed(2)); // 3.14
console.log(Math.round(Math.PI)); // 3
console.log(Math.ceil(Math.PI)); // 4
console.log(Math.floor(Math.PI)); // 3

console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8

console.log(Math.max(2, 3, 4)); // 4
console.log(Math.min(2, 3, 4)); // 2

console.log(Math.ceil((Math.random() * 100) + 1)); // random number between 1 and 100

// Set lower and higher value for random number
const lower = 60;
const higher = 100;
console.log(Math.floor(Math.random() * (higher - lower + 1)) + lower); // random number between 60 and 100