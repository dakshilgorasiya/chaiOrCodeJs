// const coding = ["js", "ruby", "java", "python", "cpp"];

// forEach cannot return a value if we write return item still it will not return anything and values will be undefined
// const values = coding.forEach((item) => {
//     console.log(item);
// });
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter return value which satisfy condition
// const values = myNums.filter( (num) => num>4)

// const values = myNums.filter((num) => {
//     return num>4;
// });

// console.log(values);

// we can do same with forEach
// const newNums = [];

// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const book = [
    { title: "book one", genre: "fiction", publish: 1981 },
    { title: "book two", genre: "non-fiction", publish: 1993 },
    { title: "book three", genre: "history", publish: 1999 },
    { title: "book four", genre: "non-fiction", publish: 1991 },
    { title: "book five", genre: "science", publish: 1989 },
    { title: "book six", genre: "fiction", publish: 1961 },
    { title: "book seven", genre: "history", publish: 2023 },
];

// const userBooks = book.filter((bk)=> bk.genre === 'history')
// console.log(userBooks);

// const userBooks = book.filter((bk)=> bk.publish >= 2000)
// console.log(userBooks);

// const userBooks = book.filter((bk) => {
//     return (bk.genre = "science" && bk.publish === 1989);
// });
// console.log(userBooks);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map will not change myNums but return after addition
// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

// chaining
// first num*10 map will execute its result will pass to second map and second map's result will pass to filter
// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num > 40);
// console.log(newNums);

const myNums = [1, 2, 3];

// reduce give to variable accuminator and currentValue accuminator hold last function return value but first time it need intilization which we give after function
// const myTotal = myNums.reduce( function (acc, currVal){
//     console.log(`acc: ${acc}, currVal${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log(myTotal);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal);

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "python course", price: 7999 },
    { itemName: "data course", price: 1999 },
];

const temp = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(temp);


