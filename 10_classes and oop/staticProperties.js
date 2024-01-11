class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
        console.log(this.createId());
    }
    static createId() {  // static function can not inherit and not anyother can access
        return `123`;
    }
}

const dakshil = new user("dakshil");
// console.log(dakshil.createId());  

class teacher extends user {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new teacher('iphone', 'i@gmail.com');

// iphone.logMe();
// console.log(iphone.createId());