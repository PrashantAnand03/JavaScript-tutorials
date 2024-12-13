//var c = 300
let a = 300 // Global Scope
if (true) {
    let a = 10  // Block scope
    const b = 20 // Block scope
    var c = 30
    // console.log("INNER: ", a)
}
// console.log(a) // a scope not accessible outside if block, accessible inside if block only
//console.log(b) // b scope not accessible outside if block, accessible inside if block only
//console.log(c)


// function one() {
//     const username = "Prashant"

//     function two(){
//         const website  = "youtube"
//         console.log(username);
//     }
//     // console.log(website)
//     two()
// }
// one()

// Note: Closures in basic -- when inner(child) function can access outer(parent) variables called closures ..ect more concept

if(true){
    const username = "Prashant"
    if(username === "Prashant"){
        const website =  " Youtube"
        // console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)


console.log(addone(5))
function addone(num){
    return num+1
}



//addtwo(5) // wrong cannot access before initialization , nee to addtwo before initialization -- Hoisting in JS
const addtwo = function(num){
    return num+2
}
addtwo(5)

