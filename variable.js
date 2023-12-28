const accountId = 144553
let accountEmail = "abc@gmail.com"  // It will work on scope same as c/c++
var accountPassword = "1234"
accountCity = "surat" // not preferable way to make variable because it will define as var
let accountState;  // It will be undefined
// accountId = 2  // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "a@gmail.com"
accountPassword = "2121212121"
accountCity = "anand"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])