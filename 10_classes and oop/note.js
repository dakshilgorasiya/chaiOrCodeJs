// object : collection of properties and methods

// const user = {
//     username: "dakshil",
//     loginCount: 8,
//     signedIn: true,
//     getUerDetails: function () {
//         console.log("hi");
//     },
// };

// console.log(user.username);
// user.getUerDetails();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this; // if we do not write this will still return automatically
}

// const userOne = User('abc', 5, false);
// const userTwo = User('xyz', 51, true);
// console.log(userOne);
// // console.log(userTwo);

// that's why new is important
const userOne = new User("abc", 5, false);
const userTwo = new User("xyz", 51, true);
console.log(userOne);
console.log(userTwo);
userOne.greeting();
console.log(userOne.constructor);

/*
How new work
1. empty object is created
2. constructor function called
3. argument will injected in this
4. return this
*/
