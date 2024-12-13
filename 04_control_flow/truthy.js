// const useremail = "p@gmail.ai"
const useremail = []

if(useremail){
    console.log("Allow user")
}
else{
    console.log("Don't Allow user")
}
// falsy Value
// false, 0, -0, "",Big int 0n, null, undefined, NaN

// true value
// true, 1, " ", [], {}, function(){}

if(useremail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length  === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let var1;
// var1 = 5 ?? 10
// var1 = null ?? 10
// var1 = undefined ?? 10
var1 = null ?? 10 ?? 20
console.log(var1)

// Ternary operatot
// Synrax: condition ? true : flase

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"):console.log("More than 80");

