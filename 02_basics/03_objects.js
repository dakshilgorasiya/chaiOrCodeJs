// when we create object using constructor it will create as singleton
//Object.create

//object literals

const mySyn = Symbol("key1");

const user = {
  name: "dakshil",
  "full name": "gorasiya dakshil r",
  [mySyn]: "mykey1", // if we write mySyn = "mykey1" than it will take mySyn as string not as symbol
  age: 18,
  location: "anand",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//there is no way to access full name using . opeator we have to use [] method
// console.log(user.name);

// console.log(user["name"]);
// console.log(user[mySyn]); // mySyn is symbol so no need to write it between ""


// user.name = "abc";
// Object.freeze(user);
// user.name = "a";    // it will not affect as user is freezed but will not give any error

// console.log(user);



user.greeting = function(){
    console.log("hello user")
}

// console.log(user.greeting);
// console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

// user.greeting2();