// HOF (Higher Order Function)

const coding = ["Java","Cpp","JS","python","ruby"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// Full syntax of Foreach loop

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr)
})

// Eg Database value in array(contains Objects)

const myObj = [
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "Cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "JavaScript",
        languageFileName: "JS"
    }
]


myObj.forEach( (item) =>{
    console.log(item.languageName)
})