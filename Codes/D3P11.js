// Objects in js
// object literal

let sym = Symbol("Makaut")

let student = {
    name: "Monojit Karfa",
    roll: "16900124113",
    department: "CSE",
    clg: "Academy of Technology",
    year: "2024-25",
    [sym]: "Makaut",

    greetings: function() {
        console.log(`Hello, my name is ${this.name} and I am from ${this.department} Dept.`);
    }
}

console.table(student);
console.log(student["clg"]); // another way of accessing any key of a object
console.log(student[sym]);

student.roll = "16900124114"; // updating the roll number
console.log(student.greetings());


Object.freeze(student); // freezing the object i.e. preventing any further changes
