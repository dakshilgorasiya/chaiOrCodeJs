/* 

JavaScript is a dynamically typed language. This means that the data type of a variable is not explicitly declared and can change during runtime. Unlike statically typed languages where variable types are explicitly defined and enforced at compile-time, JavaScript allows variables to hold values of any type, and their types can be changed dynamically.



In js data types are divided  based on how it is stored in function and pass

Primitive : pass by value
7 types: string, number, boolean, null, undefined, symbol, bigint


Reference (non primitive)
3 types:array, objects, functions

*/

//symbol : It is use to uniquly identify a value
const id = Symbol("123");
const anotherid = Symbol("123");

// console.log(id === anotherid);

const bigNumber = 6546846586451984659845n; // Bigint at last n will make this number bigint same as 105.5f in c/c++
// console.log(typeof bigNumber);


// array
const heros = ["shaktiman", "naagraj", "doga"] 

//object
let myObj = {
    name: "dakshil",
    age: 18
} 


const myFunction =  function(){
    console.log("Hello world!");
}

console.log(typeof heros);
/*
datatype
object => object
array => object
function => function (mostly known as object function)
symbol => symboldd
*/
