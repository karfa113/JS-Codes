// Falsy values
// In JavaScript, the following values are considered falsy:
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not-a-Number)

// Truthy Values
// In JavaScript, the following values are considered truthy:
// 1. true
// 2. 1
// 3. "hello" (non-empty string)
// 4. []
// 5. {}


// how to check if a object is empty or not 
const empobj = {}
if(Object.keys(empobj).length == 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}

false == 0 // true
0 == "" // true
"" == false // true

/// Nullish coalescing operator (??)
val1 = null ?? 10
console.log(val1); // 10
val1 = 20 ?? 30
console.log(val1); // 20