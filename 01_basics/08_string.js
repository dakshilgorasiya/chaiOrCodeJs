const name = "dakshil";
const repoCount = 50;

// console.log(name + repoCount + "abc");   //old way

//string intercollation
console.log(`Hello my name is ${name} and my repo count ${repoCount}`);

const gameName = new String("dakshil-bhai-gorasiya"); // another way to declare a string using constructor as string in js is a object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('a'));

const newString =  gameName.substring(0, 4)

// console.log(newString);

const anotherString = gameName.slice(-8, 8)
// console.log(anotherString);

const newString1 = "     dakshil     ";

console.log(newString1);
console.log(newString1.trim());


const url = "https://google.com/dakshil%20gorasiya"  //browser will replace space(' ') with "%20"

console.log(url.replace('%20', '-'));

console.log(url.includes('dakshil'));

console.log(gameName.split('-'));

