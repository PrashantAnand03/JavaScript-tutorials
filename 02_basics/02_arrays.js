const marvel_Heros = ["Thor","IronMan","SpiderMan"]
const dc_Heros = ["Superman","flash","Batman"]

// marvel_Heros.push(dc_Heroes) //Not recommended Practice
// console.log(marvel_Heros)
// console.log(marvel_Heros[3])

// const all_Heros = marvel_Heros.concat(dc_Heroes)//Not much preferred
// console.log(all_Heros)

// !!! Important //Most standard Practice to Merge two array --> Spread
// const all_new_Heros = [...marvel_Heros,...dc_Heros] 
// console.log(all_new_Heros)

// const another_array = [0,1,2,3,[4,5,6],[7,8,[9,10]]]
// const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array)

// !!! Important
console.log(Array.isArray("Hitesh")) // isArray -- For Check
// console.log(Array.from("Hitesh")) // helps to convert Different forms data(List,object,string) into array
// console.log(Array.from({name: "Hitesh"})) // batana hoga key ke liye bnaye ya values ke liye.

// const score1 = 100
// const score2 = 200
// const score3 = 300

// console.log(Array.of(score1,score2,score3)) // of - returns new array from set of elements