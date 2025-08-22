// foreach loop

const languages = ["js", "cpp", "py", "c"]

languages.forEach((item) => {
    // console.log(item);
})


const newlang = languages.forEach((item) => {
    return item // foreach does not return anything
})
console.log(newlang);

const lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newlst = lst.filter((num)  => num > 5) // it returns the values that satisfies the condition in form of a array.
console.log(newlst);