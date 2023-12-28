/*
Two types : stack(primitive)
            heap (non-primitive)
*/

let myName = "dakshil"

let anotherName = myName

anotherName = "abc";

console.log(myName);
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let anotherUser = user;
anotherUser.email = "abc@gmail.com"

console.log(user);
console.log(anotherUser);