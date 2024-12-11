// const tinderUser = new Object()// Singleton Object

const tinderUser = {} // non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prashant",
            lastname: "Anand",
        }
    }
}
//Object ke ader objects ko access krne ke liye.
// console.log(regularUser.fullname.userfullname.firstname)


// Merging Objects
// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {... obj1, ...obj2} // 90% use this
// console.log(obj3)


const objUser = [
    {
        id: 1,
        email: "prashant1@google.com"
    },
    {
        id: 2,
        email: "prashant2@google.com"
    },
    {
        id: 3,
        email: "prashant3@google.com"
    },
    {
        id: 4,
        email: "prashant4@google.com",
    },
    {
        id: 5,
        email: "prashant5@google.com",
    }
]
// `console.log(objUser[0].email)`
// console.log(objUser)
// console.log(Object.keys(objUser))

// console.log(tinderUser) 
// console.log(Object.keys(tinderUser)) // keys in array
// console.log(Object.values(tinderUser)) // values in array
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Object Destructuring

const course = {
    coursename:  "Js in Hindi",
    price: 399,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor)

// APIS --  An API, or application programming interface, is a set of rules or protocols that enables software applications to communicate with each other, exchange data, features and functionality.
/* Note: In Begining we get API's value in XML Structure -- Very complex
         XML - extensible Markup Language
         Now we Get API's Value in JSON Structure
         JSON - JavaScript object notation
     */
// JSON API's Value Structure
{
    "name": "Hitesh",
    "course": "JS in Hindi",
    "price":  99
}
// Sometime we get API's value in Array -- use JSON formator tool to understand API value
