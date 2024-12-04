// let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toDateString())
// console.og(mycreatedDate.toString())

let mycreatedDate = new Date("01-14-2024") // MM-DD-YY
// console.log(mycreatedDate.toLocaleDateString())
// console.log(mycreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(mycreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // To convert Dates into sec divide by 1000

let myDate = new Date()
// console.log(myDate.getDate())
// console.log(myDate.getMonth()+1)
// console.log(myDate.getFullYear())

//console.log(`Todays date ${myDate.getDate()}, month ${(myDate.getMonth())+1} and year ${myDate.getFullYear()}`)

myDate.toLocaleString('default', {
    weekday: "long",
})
console.log(myDate)