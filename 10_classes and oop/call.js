function setUsername(username) {
    this.username = username;
    console.log("called");
}

function createuser(username, email, password) {
    setUsername.call(this, username);  // without call function run and its execution contast deleted because of call its reference will hold
    // this will pass to function so function will refer this function's object



    this.email = email;
    this.password = password;
}

const a = new createuser("a", "a@gmail.com", "1234");

console.log(a);
