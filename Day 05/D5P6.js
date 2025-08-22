// map function

lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
newlst = lst.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50) // we can perform multiple checks using multiple maps after processing inner map function the result will be given to the outer map function for process. Thats how it works.
console.log(newlst);
