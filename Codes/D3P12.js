// Nested objects

let user = {
    email: {
        personal: "user@example.com",
        work: "user@workplace.com"
    }
}

console.log(user.email.personal); // Accessing nested object property
console.log(user.email.work); // Accessing another nested object property
