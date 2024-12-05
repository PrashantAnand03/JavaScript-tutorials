const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj", "Doga"]

const myArr2 = new Array(0,1,2,3,4,5)
// console.log(myArr2)
// console.log(myArr2[0])

// myArr.push(6) // push -> Insert Element in array.
// myArr.pop(6) //  pop -> Remove Element from array.

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(6))
// console.log(myArr.indexOf(5))


// const newArr = myArr.join() // join() --> converts array into String
// console.log(myArr)
// console.log(newArr)

// Slice    Splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3) // (Slice() --> only removes element aslo last index excluded) 
//Note: Slice() - Do not chnage Original  Array
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3) // (Splice() --> It also removes element but including last index elements
//Note: Splice() - Change/Manipulate the original array
console.log(myn2)
console.log("C ",myArr)


