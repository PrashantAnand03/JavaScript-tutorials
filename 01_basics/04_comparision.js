// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


//Note: we can compare two similar datatype values (Typescript identify this mistake beforehand)
// console.log("2" > 1)
// console.log("02" > 1)

// console.log(null > 0) //false
// console.log(null == 0) // false
// console.log(null >= 0) // true

//Note: The reason is that an equality check == and comparisons > < >= <= works Differently.
// Comparisons convert null to a number, treating it as 0. ie. null >= 0 --> true  and null > 0 --> false

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// Strict Check "===" --> Not only check number but also checks its datatypes
console.log("2" === 2)
