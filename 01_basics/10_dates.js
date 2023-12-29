let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23);  // 23-01-2023
// console.log(myCreatedDate.toDateString());



// let myCreatedDate = new Date(2023, 0, 23, 5, 3);

// console.log(myCreatedDate.toLocaleString());






// let myCreatedDate = new Date("2023-01-14"); 
// let myCreatedDate = new Date("01-14-2023"); 
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime());

// console.log(Math.floor(Date.now()/1000)); // to get in second

let newDate = new Date();
// console.log(newDate.getMonth() + 1);   //as month start from 0


console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))    // we can explicitly write properties press 'ctrl + space to know more in vscode


