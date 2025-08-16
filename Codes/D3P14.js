// functions in js

function add(num1, num2){
    return num1 + num2;
}

//console.log(add(5, 10));

function loginMessage(username){
    if(!username){
        console.log("Please enter a valid username.");
        return 
    } 
    return `Welcome, ${username}!`;
}

console.log(
    loginMessage("Monojit")
);
