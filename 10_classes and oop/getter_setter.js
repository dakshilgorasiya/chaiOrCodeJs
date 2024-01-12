class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // if we define getter we have to define setter
    get password() {
        return `${this._password}dakshil`;
    }

    // value will set by setter not by consturcot for password
    set password(password) {
        this._password = password;
    }
}

const dakshil = new user("a@gmail.com", "abc");

console.log(dakshil.password);
