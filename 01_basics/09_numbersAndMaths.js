const score = 400;

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const a = 23.8966;

// console.log(a.toPrecision(3));

const b = 10000000;

// console.log(b.toLocaleString('en-IN')); // represent value in indian form because of 'en-IN'

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.PI);

// console.log(Math.abs(-4)); //absolute

// console.log(Math.round(4.65));

// console.log(Math.ceil(4.2)); //celling funciton

// console.log(Math.floor(4.5));

// console.log(Math.min(4, 3, 5, 1, 8));

// console.log(Math.random());   // Always value between 0 and 1 inclusive

// console.log((Math.random()*10) + 1);  //always between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
