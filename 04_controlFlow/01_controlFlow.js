// logical operator < > <= >= == != === !==

const balance = 1000;

//implecit scope till ;
// if (balance > 500) console.log("test"), console.log("test2");

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3;

// switch (month) {
//    case 1:
//       console.log("January");
//       break;
//    case 2:
//       console.log("February");
//       break;
//    case 3:
//       console.log("March");
//       break;
//    case 4:
//       console.log("April");
//       break;
//    default:
//       console.log("Default");
//       break;
// }

//truthi falsi value value
/*
false : 0, -0, 0n(BigInt), "", null, undefined, Nan

true : "0", 'false', " ", [](emptyArray), {}(emptyObject), function(){}(emptyFunction)
Anything inside string is true

*/
const userEmail = [];

if (userEmail.length === 0) {
   console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}




// Nullish Coalescing Operator (??): null undefined
// ?? use to stay safe from null and undefined value it will assign first value from left to right which is not null nor undefined

let val1;
val1 = 5??10
val1 = null??10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
val1 = null ?? undefined ?? 11


console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More than 80");;
