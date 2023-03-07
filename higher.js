//3. Map, fiter, reduce: Higher order functions

//Map
let arr = [2, 4, 6, 8, 10, 11, 32, 14, 16, 17 ]

// let ans = arr.map(el => el * 2)
// console.log(ans)

// Filter the array for odd numbers
//ans= [11, 17]

// let filteredArray = arr.filter(el => el % 2 !=0)
// console.log(filteredArray)

//Reduce
//Sum all the elements in the array

let sumOfElements =  arr.reduce((el, prev) => el + prev)
console.log(sumOfElements)