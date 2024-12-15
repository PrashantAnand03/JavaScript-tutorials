const coding = ["Java","Cpp","JS","python","ruby"]

const val = coding.forEach( (item) => {
    // console.log(item)
    return item  // forEcah loop se hm log array ya kuch return nhi kra skte.
})
// console.log(val)

// Filter - It creates a new array with all elemnets that pass the test implementd by the provided function.

const myNums = [1,2,3,4,5,6,7,8,9,10] 

// const newNums = myNums.filter( (num) => num > 4) // Implicit arrow function
// console.log(newNums)   

// const newNums = myNums.filter( (num) => {
//     return num > 4  // Explicit arrow function
// }) 
// console.log(newNums) 

// const newNums = []

// myNums.forEach( (nums) => {
//     if(nums >  4)
//         newNums.push(nums)
// })
// console.log(newNums)

// Book Database

const book = [
    {
        title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2004
    },
    {
        title: 'Book Three', genre: 'Fiction', publish: 1993, edition: 2004
    },
    {
        title: 'Book Four', genre: 'Fiction', publish: 1999, edition: 2004
    },
    {
        title: 'Book Five', genre: 'History', publish: 1989, edition: 2004
    },
    {
        title: 'Book Six', genre: 'Non-Fiction', publish: 2009, edition: 2004
    },
    {
        title: 'Book Seven', genre: 'Science', publish: 1987, edition: 2004
    },
    {
        title: 'Book Eight', genre: 'Fiction', publish: 1986, edition: 2004
    },
    {
        title: 'Book Nine', genre: 'History', publish: 2011, edition: 2013
    },
    {
        title: 'Book Ten', genre: 'Fiction', publish: 2019, edition: 2004
    }
]

let userBook = book.filter(  (bk) => bk.genre === 'History')
userBook = book.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
} )
console.log(userBook)