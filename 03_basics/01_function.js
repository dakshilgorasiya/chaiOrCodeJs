function sayMyName() {
  console.log("d");
  console.log("a");
  console.log("k");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("l");
}

// sayMyName()

// function add(number1, number2) {
//   console.log(number1 + number2);

// }
function add(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

// add(3, 4);

// const result = add(3,4);
// console.log(result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

function loginUserMessage(username = "dakshil") {
  if (username === undefined) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("abc"));
console.log(loginUserMessage());
