// console.log(2 > 1);

// console.log("2" > 1)  // 2 will be converted to number but this type of comparision should be avoided to maintain code
// console.log("02" > 1)


// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)
/*
The reason is that an equality check == and compatisons > < >= <= work differently
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
But (2) will not convert null to Number
*/


// always false in case of undefined
// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)




// === strict comparision it will check not only value but also it's data type

console.log("2" === 2);
