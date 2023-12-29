const tinderUser = new Object(); //singletonobject

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "dakshil",
      lastname: "gorasiya",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2);  // {} is optional but a good practise as it will work as target and other parameters as source

// console.log(obj3);




const obj = {...obj1, ...obj2};
// console.log(obj);



const users = [
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    },
    {
        id:1,
        email: "abc@gmail.com"
    }
]


// console.log(users[0].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
