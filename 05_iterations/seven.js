const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNums = myNumbers.map( (num) => num+10)
// console.log(myNums)

// Chaining 

const myNums = myNumbers
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num > 40)

                // console.log(myNums)













// const Nums = []

// myNumbers.forEach( (num) => {
//     return (num + 10)
//     Nums.push(num)
// })
// console.log(Nums)