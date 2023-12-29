const myArr = [0, 1, 2, 3, 4, 5, true, "dakshil"];

// console.log(myArr[5]);

const myHeros = ["ironman", "hulk"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr2);

//array method

// myArr.push(6);
// myArr.pop();

// myArr.unshift(8)  // push_front
// myArr.shift(); // pop_front

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(2));

const newArr = myArr.join(); // data type of newArr is string

// console.log(newArr);
// console.log(myArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);  //does not manipulate original array
console.log("b" ,myn1);

const myn2 = myArr.splice(1, 3); // remove element from original array and add it to new array
console.log("b" ,myn2);
console.log("c", myArr);