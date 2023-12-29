const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// let allHeros = marvel_heros.concat(dc_heros);

// console.log(allHeros);

//using spraid operator
const allnewHeros = [...marvel_heros, ...dc_heros];
// console.log(allnewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realArray = anotherArray.flat(Infinity);

// console.log(anotherArray);
// console.log(realArray);

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
// console.log(Array.from({name: "dakshil"}));  //give empty array

let a = 100;
let b = 200;
let c = 300;

console.log(Array.of(a, b, c));
