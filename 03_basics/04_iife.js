// Immediately Invoked Function Expressions (IIFE)

// Syntax  --  (Fun def)( Fun Exe)

// Named IIFE 
(function database() {
    console.log(`DB CONNECTED`)
})();


// Unnammed IIFE/ Arrow IFFE
( () => {
    console.log(`DB CONNECTED TWO`);
})();

// Parameter IFFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Prashant')
