// reduce function in JS

nums = [1, 2, 3, 4,, 5, 6, 7, 8, 9]

// let sum = nums.reduce(function(acc, current)  {
//     return acc + current
// }, 0)

let sum = nums.reduce((accumulator, current) => accumulator + current, 0)
console.log(sum);
