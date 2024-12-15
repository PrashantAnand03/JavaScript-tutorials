// reduce method: reduce () method executes a user supplied "reducer" callback function on each element of the array.

const myNumber = [1,2,3]

// On regular fun
const myTotal = myNumber.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} and currVal is: ${currVal}`)
    return acc + currVal
}, 0 )

// On Arrow func

// const myTotal = myNumber.reduce( (acc,currVal) => acc+currVal, 0)

console.log(myTotal)

// Eg: Shopping Cart

const shoppingCart = [
    {
        itemName: "Java course",
        price: 1000
    },
    {
        itemName: "Full Stack Dev course", 
        price: 2999
    },
    {
        itemName: "Application Dev course", 
        price: 4999
    },
    {
        itemName: "AI/ML course", 
        price: 5999
    }
]
 
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);