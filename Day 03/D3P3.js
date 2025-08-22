let yoo = new String("Monojit") // another way of creating a string object
console.log(yoo);

// string methods - 
// toUpperCase, length, charAt, indexOf, toLowerCase, slice, trim, replace, includes

console.log(yoo.toUpperCase()); // gives the string in uppercase

console.log(yoo.length); // gives the length of the string

console.log(yoo.charAt(0)); // gives the first character of the string

console.log(yoo.indexOf("o")); // gives the index of the first occurrence of "o"

console.log(yoo.toLowerCase()); // gives the string in lowercase

console.log(yoo.slice(0, 3)); // end index is exclusive i.e. it will not be printed.

console.log(yoo.trim()); // removes leading and trailing whitespaces

console.log(yoo.replace("o", "a")); // replaces first occurrence of "o" with "a"

console.log(yoo.includes("Mon")); // checks if "Mon" is present in the string
