// Immediately Invoked Function Expression (IIFE)

// many time we don't want global pollution affect function so we use iife function which will execute immefiately as program runs

//named IIFE
(function one() {
   console.log("DB CONNECTED");
})(); // semicolon is needed to stop IIFE function if do not added ; here and execute another IIFE function it will give error



//Unnamed IIFE
((name) => {
   console.log("DB CONNECTED TWO", name);
})('dakshil');


