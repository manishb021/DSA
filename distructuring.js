// Distructring of arrays
// -->spread operator
/*
let names = ["Manish","john", "jacob", "Jenney"]

let [name1, ...name3] = names

console.log(name1)
console.log(name3)
*/

//Distructuring of objects
let person = {
    name: "Manish",
    city: "pune",
    job: "Software developer"
}

let {name: nameOfperson, ...otherkeys} = person;

console.log(nameOfperson)
console.log(otherkeys)