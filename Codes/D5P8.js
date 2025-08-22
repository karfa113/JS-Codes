// application of reduce operator in shopping carts.

let cart = [
    {itemName: "Laptop Bag", price: 1150},
    {itemName: "Bingo Tedhe Medhe", price: 20},
    {itemName: "Laptop pouch", price: 300},
    {itemName: "table mat",price: 200},
    {itemName: "shirt",price: 1800}
]

let total = cart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);