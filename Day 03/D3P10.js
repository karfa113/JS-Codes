const marvel = ["Iron Man", "Thor", "Hulk"]
const dc = ["Batman", "Superman", "Wonder Woman"]

const combined = marvel.concat(dc) // Combines both arrays
//console.log(combined);

//marvel.push(dc) // Adds the entire dc array as a single element
//console.log(marvel[3][1]);

const all = [...marvel, ...dc] // Combines both arrays using spread operator
console.log(all);

const numbers = [10, 20, 30, [40, 50, 60], 70, [80, [90, 100]]]
console.log(numbers);

const flat = numbers.flat(Infinity) // Flattens the array up to infinite levels
console.log(flat);
