let score = undefined;

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
//It will make NaN means not a number when conversion fail
// Type of NaN if number
// If we try to convert string it will assign NaN
// If we try to convert null it will assign 0
// If we try to convert undefined it will assign NaN
// If we try to convert boolean it will assign 1(true) or 0(false)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
/* 
boolean conversion
"" => false
"abc" => true
0 => false
1 => true
*/

// console.log(booleanIsLoggedIn);

let someNumber = 5

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
