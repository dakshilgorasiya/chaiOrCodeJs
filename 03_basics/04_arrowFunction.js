const user = {
   username: "hitesh",
   price: 999,
   welcomeMessage: function () {
      console.log(`${this.username}, welcome to website`);
      console.log(this);
   },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // It will give empty object as node is refering an empty object as global but when we run this line in browser it will give window object in which all events are there
// NOTE: global scope of node and browser is different

function one() {
   let username = "dakshil";
   console.log(this);
   // console.log(this.username); // not accessible
}

// one()

//arrow function
// const one = () => {
//   let username = "dakshil";
//   // console.log(this);
//   // console.log(this.username);
// };
/*
Difference between arrow and normal function
In normal function this is not empty so we can use it
But in arrow function this is empty so we can't use it
*/

// one();

// arrow function which use explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//arrow function which use implicit return
// when parenthesis is not used in arrow function it will return implicit value
const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(2, 3));

const objectReturn = () => ({ user: "dakshil" });


// console.log(objectReturn());
