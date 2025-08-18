// This and arrow functions in js
const add = (x, y) => { 
    console.log(this); // this function will not work for arrow functions
    return x + y;
}

const subtract = (x, y) => x - y // Implicit return 

// console.log(add(669, 96))

const user = {
    username: "Monojit",
    age: 19,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to the platform !`); 
        console.log(this); 
    }
}

// user.welcomeMessage();
// console.log(this);

function chai(){    
    console.log(this);
}

chai()
