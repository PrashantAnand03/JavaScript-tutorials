function myName() {
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("T") 
}
// myName()

// Function to add two numbers.

// function addTwoNumbers(number1,number2) {// At the time of Function Declaration/Defination we say parameters.
//     console.log(number1+number2) 
// addTwoNumbers(3,4) // At the time of Function Call we say arguments
// }

// function addTwoNumbers(number1,number2) {
//     let result = number1+number2
//     return result;
// }
// let result = addTwoNumbers(3,4)
// console.log("result: ", result)

function loginUserMessage(username) {
    //function loginUserMessage(username = "same") { //default set name not go inside if, username is set
    if(!username){
        console.log("Please enter a Username")
        return
    }
    return `${username} Just logged in`
}
//console.log(loginUserMessage())
// console.log(loginUserMessage("Hitesh"))


// Use of REST Operator
//In E-commerce application we add multiple num of items in card and we don't know exact num for such we use REST operator that packs all items in a bundle.
function calculateCartPrice(...num1) {
    // function calculateCartPrice(val1,val2,...num1) { // val1 = 100, val2 = 200, num1 = [300,500]
    return num1
}
// console.log(calculateCartPrice(100,200,300,500,1000))

const user = {
    username: "Prashant",
    price: 399
}

function handleObject(anyUser) {
    console.log(`username is ${anyUser.username} and the price is ${anyUser.price}`)
}
// handleObject(user)

// handleObject({
//     username: "Prashant",
//     price: 399
// })

const myNewArray = [100,200,300,400]

// WAF that accept array and return secondvalue

function returnSecondValue(getValue){
    return getValue[1]
}
// console.log("Second Value is: ",returnSecondValue(myNewArray))
// console.log(returnSecondValue([100,200,300,400]))


