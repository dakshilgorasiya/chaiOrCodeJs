function user(email, password) {
    console.log("function called");
    this._email = email;
    this._password = password;

    // here we do not need to write setter as it will not call
    Object.defineProperty(this, "emaila", {
        get: function () {
            console.log("email getter");
            return this._email.toUpperCase();
        },
        set: function (value) {
            console.log("email setter");
            this.mail = value;
        },
    });
    Object.defineProperty(this, "password", {
        get: function () {
            console.log("email getter");
            return this._password.toUpperCase();
        },
        set: function (value) {
            console.log("password setter");
            this._password = value;
        },
    });
}

const chai = new user("a@gmail.com", "_email");

console.log(chai.emaila);
