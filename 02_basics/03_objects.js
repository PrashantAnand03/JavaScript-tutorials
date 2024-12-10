/* 2. Singleton -- whenever create using Literals no signleton formed, formed when created using Constructor.
   Object.create  --> constructor created singleton formed.*/


   // Extra 
// OBJECT DECLARATION SYNTAX

// const myObj = {
//     name : "prashant",
//     age : 21,
// }
// console.log(typeof myObj)


// 1.  Object Literal
// const JsUser = {}  //Empty object

// Note: Mostly we access Object value using dot pnly but in some case if 1. Value String 2. Value Symbol  -- We use [] 

const mySym = Symbol("key1")

const JsUser = {
    name: "Prashant",
    "full name": "Prashant Anand",
    [mySym]: "myKey1", //  [mySym] -- Symbol ko refer krte h Square Bracket se
    age: 21,
    location: "Kolkata",
    email: "prashantanand@gmail.com",
    isLogged: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anandprashant@gmail.com" 
// Object.freeze(JsUser)
JsUser.email = "Microsoft@gmail.com" 
// console.log(JsUser);

/* Note: 1. Object ki value ko access kaise krte h -- dot Notation and other one 
         2. Values ko chnage kaise krte h -- JsUser.email = "anandprashant@gmail.com"   */

JsUser.greeting = function() {
    console.log("Hello, JsUser")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JsUser ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


