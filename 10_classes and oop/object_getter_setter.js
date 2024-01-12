const user = {
    _email: "a@gmail.com",
    _password: "abc",

    // set is not necessary if we write get as set is not invoking
    get email() {
        console.log('getter');
        return this._email.toUpperCase();
    },
    set email(value) {
        console.log('setter');
        this._email = value;
    },
};

// console.log(user.email);

const a = Object.create(user);
console.log(a.email);
