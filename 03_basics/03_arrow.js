const user = {
    username: "Prashant",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Nishant"
// user.welcomeMessage()

// console.log(this);


// const chai = function () {
//     let username = "Parshant"
//     console.log(this.username) //this ka  current context hm function me nhi kr pa rh sirf object me ho rha h.
// }
// chai()

// const chai = () => { // Arrow function
//     let username = "Parshant"
//     console.log(this.username)
// }
// chai()


// Arrow Function - Explicit Return --  use return keyword
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

// Arrow Function - Implicit Return -- not use {}, not use return keyword

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// To return object in Implicit arrow Fun
const addTwo = (num1,num2) => ({username:"Prashant"})

console.log(addTwo())