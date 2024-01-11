class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password) {
        super(username); // here we do not need to pass this and use call
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const dakshil = new teacher('dakshil', 'a@gmail.com', '1234');

// dakshil.addCourse();
// dakshil.logMe();

const a = new user('a');
// a.addCourse(); // it will not work as user have not access to teacher
// a.logMe();

// console.log(dakshil === a);  // false
// console.log(dakshil instanceof teacher); // true
// console.log(dakshil instanceof user); // true


