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

// console.log(loginMessage("Monojit"));

function totalPrice(...num){ // rest parameter
    let result = 0
    for(i=0; i<num.length; i++){
        result += num[i];
    }
    return result
}

console.log(`Total price: ${totalPrice(100, 200, 300, 400, 500, 600)}`);
