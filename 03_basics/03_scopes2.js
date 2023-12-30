function one() {
   const username = "dakshil";
   function two() {
      const website = "youtube";
      console.log(username);
   }
   //   console.log(website); //not accessible here
   two();
}

// one();

console.log(addone(5));

function addone(value) {
   return value + 1;
}

// console.log(addtwo(5))    we can not write it as function is in variable which is used before function declaration

//also known as expresion
const addtwo = function (num) {
   return num + 2;
};

console.log(addtwo(5));
