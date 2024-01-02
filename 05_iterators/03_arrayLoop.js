// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

//forof loop give direct value but forin loop will give key
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello";
// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps are not iterable

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "Unites States of America");
map.set("USA", "Unites States of America");
map.set("FR", "France");

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, ' ', value);
// }

// const myObj = {
//     game1: "nfs",
//     game2: "cod",
// };

// It will not work as object are not iterable in js
// for (const [key, val] of myObj) {
//     console.log(key, ' ', val);
// }

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
};

// for (const key in myObj) {
//     console.log(`${key} shortcut is ${myObj[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"];

// forin loop will give key not value
// for (const key in programming) {
//     console.log(programming[key]);
// }

// map is not iterable
// for (const key in map) {
//     console.log(key);
// }

// foreach loop

const coding = ["js", "ruby", "java", "cpp"];

// foreach require a callback function
// callback function means function with no names
// data of array will come in item as parameter of function which we can use in that function
// coding.forEach(function (item) {
//     console.log(item);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// we can also give reference of other function to forEach
// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme);

// forEach not only have item it also have index of item and entire array
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        language: "javascript",
        languageFile: "js",
    },
    {
        language: "java",
        languageFile: "java",
    },
    {
        language: "python",
        languageFile: "py",
    },
];

myCoding.forEach((item) => {
    console.log(item.language + " " + item.languageFile);
});
