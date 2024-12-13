// To run Code on  Conditional basis i.e if login, login code part get executed, if logout, logout code  part get excuted. -- Called Control Flow/Logic Flow

// const isLoggedIn = true
// const temperature = 41
// if(temperature === 50){
//     console.log("temperature is less than 50");
// }
// else{
//     console.log("temperature is graeter than 50") 
// }
// console.log("executed")

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)

const balance = 1000
// if(balance > 500) console.log("test");

// Nesting
// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = true
const loggedInFromGmail = true

if(userLoggedIn && debitcard && 2==2){
    console.log("Allow user to buy course");
}

if(loggedInFromGoogle || loggedInFromGmail){
    console.log("User logged in")
}