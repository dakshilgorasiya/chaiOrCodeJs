class user {
    constructor(email, password) {
        console.log('constructor');
        this.email = email;
        this.password = password;
        console.log('password setted');
    }

    // if we define getter we have to define setter
    get password() {
        console.log('getter');
        return `${this._password}dakshil`;
    }

    // value will set by setter not by consturcot for password
    set password(password) {
        console.log('setter');
        this._password = password;
    }
}

const dakshil = new user("a@gmail.com", "abc");

console.log(dakshil.password);
