// console.log("Prashant Anand")


const accountId = 12345
let accountEmail = "prashant03@gmail.com"
var accountPassword = "123456"
accountCity = "Bengaluru"
let accountState

// accountId = 123 // Not Allowed constant cannot be changed.
accountEmail = "prashantgdd@gmail.com"
accountPassword = "98765"
accountCity = "Hyderabad" //without variable memory reserve possible but not best practices.

/*
Note: Prefer not to use Var because of issue in block Scope & functional scope problem.
we mostly use let and const 
*/

// console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


