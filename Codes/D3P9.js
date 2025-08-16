// Array methods

const numbers = [10, 20, 30, 40, 50, 60]
numbers.push(70) // Adds 70 to the end of the array
numbers.pop() // Removes the last element from the array
numbers.unshift(0) // Adds 0 to the beginning of the array
numbers.shift() // Removes the first element from the array

console.log(numbers);
console.log(numbers.includes(20)) // true
console.log(numbers.indexOf(20)); // 1
console.log(numbers.indexOf(100)); // -1 (not found)

const newarray = numbers.join() // Converts the array to a string
console.log(newarray); // 0,10,20,30,40,50,60

const num1 = numbers.slice(1, 3) // creates a shallow copy of the array
console.log(num1); // 10,20

const num2 = numbers.splice(1, 3) // removes 3 elements from index 1
console.log(num2); // 20,30,40

console.log(numbers); // 0,10,50,60