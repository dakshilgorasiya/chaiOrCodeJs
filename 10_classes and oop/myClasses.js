class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUserName() {
        return `${this.username.toUpperCase()}`;
    }
}

const a = new user("a", "a@gmail.com", "123");

console.log(a.encryptPassword());
console.log(a.changeUserName());

// the same is interally done as below as javascript does not have class it is just syntax sugar
// function user(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encryptPassword = function () {
//     return `${this.password}abc`;
// };

// user.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`;
// }

// const b = new user("a", "a@gmail.com", "123");

// console.log(b);
// console.log(b.changeUserName());
// console.log(b.encryptPassword());
