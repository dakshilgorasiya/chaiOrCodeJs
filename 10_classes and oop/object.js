// function multipleBy5(num){
//     return num*5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(2));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
};

createUser.prototype.printme = function () {
    console.log(`Score is ${this.score}`);
};

// to include prototype we need new keyword
const a = new createUser("a", 25);
const b = new createUser("b", 50);

// a.printme();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`);
    },
};

Object.prototype.dakshil = function () {
    console.log(`dakshil is present is all object`);
};

Array.prototype.heydakshil = function () {
    console.log(`Dakshil says hello`);
};

// myHeros.dakshil();

// heroPower.dakshil();

// myHeros.heydakshil();

// heroPower.heydakshil();  // will not work

// inheritance

const user = {
    name: "dakshil",
    email: "abc@gmail.com",
};

const teacher = {
    makeVideo: true,
};

const teachingSupport = {
    inAvailable: false,
};

const tASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern object

Object.setPrototypeOf(teachingSupport, teacher); // teachingSupport can access all properties of teacher

let myName = "dakshil        ";

String.prototype.truelendgth = function () {
    console.log(this);
    console.log(`True lenght is ${this.trim().length}`);
};

// myName.truelendgth();

"abc".truelendgth();
