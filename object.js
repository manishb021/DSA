//class 1: Revision on Arrays and Objects
// 1. Different ways we can create objects in js 

/* 
1. Using object literal
2. By creating instance of Object directly
3. By using the constructor function
*/

//Using object literal - {}: (key, value) pairs and functions

/* const person ={
    name: "manish",
    age: 24,
    hobbies: ['software', 'artifical intelligence', 'philosophy'],

    greet: function(){
        console.log("Hello")
    }
}

console.log(person.name)
console.log(person.greet())
*/

//By using the constructor function
/*function River(){
    this.name = 'Ganga',
    this.state = 'Uttar Pradesh',
    this.printName = function(){
        console.log("Welcome to river " + this.name)
    }
}

const river1 = new River()
console.log(river1.printName())
*/

// By creating instance of Object directly

const book = new Object({
    name: 'the seeker',
    author:'Karan Bajaj'
})

console.log(book.author)