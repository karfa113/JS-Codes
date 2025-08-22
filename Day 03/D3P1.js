// stack is used to premetive datatypes
// Heap is used for non-premetive data types.

/*let clg = "Academy of Technology"
let anotherclg = clg
anotherclg = "IPGME&R"

console.log(clg);
console.log(anotherclg);*/

let user = {
    name: "Monojit Karfa",
    email: "karfamonojit12@gmail.com"
}

let user2 = {
    name: user.name,
}

user2.name = "XYZ"

console.log(user.name);
console.log(user2.name);
