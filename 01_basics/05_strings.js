const name = "Prashant"
const repoCount = 50

// console.log(name + repoCount + "Value")// outdated

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)// (Most Modern preferred JavaScript ES6) Called string interpolation uses(backticks)

const gameName = new String("Prashant")

// console.log(gameName[0])
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('h'))
// console.log(gameName.length)

// const newString = gameName.substring(0,4)
// console.log(newString)

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString)

// const anothernewString = "          Prashant            "
// console.log(anothernewString)
// console.log(anothernewString.trim())

const url = "https://Prashant%20Anand"
console.log(url.replace('%20','-'))

console.log(url.includes('Prashant'))
console.log(url.includes('hitesh'))