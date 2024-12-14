// for of

// Note: // arrays ke upar forof loop. , // Objectss ke upar forin loop

// let arr = [1,2,3,4,5]
// for (const num of arr) { // arrays ke upar forof loop
//     console.log(num)
// }

const greetings = "Hello World!"

for (const i of greetings) {
    // console.log(`Each char is ${i}`)
}

// datatype - Map
//Map -  The map object holds key value pair and remembers the original insertion order of key or value. A key in a map occurs only once, and it is unique in map collection.

// const map = new Map
// map.set("IN","India")
// map.set("USA","United State of America")
// map.set("Fr","France")
// console.log(map)

// Map ke upar "forof" loop lagta h
// for (const [key,value] of map) {
//     console.log(key +":-"+ value)
// }

const myObj = {
   username: "p@google.com",
   course: "Js in Hindi"
}

for (const [key,value] of myObj) { // In this way map is not iterable on Object using forof
    console.log(key + ":-"+ value)
}

const map = new Map()
map.set("IN","India")
map.set("USA","United State of America")
map.set("Fr","France")

for (const key in map) { //  map is not iterable on Object using forin
    console.log(key)        
}