// Primitive -- Call by value take place (in it compy of original address is created and whenever we make any chnages that changes take place in that copy value)

// 7 types : String, Number, boolean, null, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)

// const bigNumber = 12345678916273456769846n


// Reference (Not primitive) -- call by reference(in it reference of memory address is passed and the changes made that occur  in address value)
// Arrays, objects, Functions 

// const heros = ["shaktiman","naagraj","doga"];

// inside curly braces we write key:value pair called object 
// let myObj = {
//     name: "Prashant",
//     age: "22",
// }

// const myFunction = function() {
//     console.log("Hello World");
// }


// console.log(typeof myFunction);


// ******************************** Memory Threads ********************************************

// Stack --> primitive   Heap  --> reference


// let myYoutubename = "PrashantAnanddotcom"
// let anothername = myYoutubename
// anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

// let userOne = {
//     email : "user@google.com",
//     upiId: "user@ybl",
// }
// let userTwo = userOne
// userTwo.email = "prashant@google.com"

// console.log(userOne.email)

// Object declaration
// const myObj = {
//     name: "Prashant",
//     age: 22,
// }
// console.log(myObj)
// console.log(typeof myObj)


//Function Declaration

let carName = "TATA HARRIER"
let carPrice = 1800000
const myCars = function() {
      console.log(`carName ${carName} and carPrice ${carPrice.toLocaleString('en-IN')}`);
}
console.log(myCars())