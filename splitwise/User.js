class User {
    #id;
    #phone;
    #email;
    #name;
    constructor() {
        this.#id = 1;
    }   

    set Phone(phone) {
        this.#phone = phone;
    }
    set Email(phone) {
        this.#phone = phone;
    }
    set Name(phone) {
        this.#phone = phone;
    }

    get Email() {
        return this.#phone;
    }

    get Name() {
        return this.#phone;
    }

    get Phone() {
        return this.#phone;
    }

    static createUser(phone, email, name) {
        let user = new User();
        user.Phone = phone ;
        user.Email = email;
        user.Name = name;
        return user;
    }
}

const user0 = User.createUser(1230, 'a0@email.com', 'a0');
const user1 = User.createUser(1231, 'a1@email.com', 'a1');
const user2 = User.createUser(1232, 'a2@email.com', 'a2');
const user3 = User.createUser(1233, 'a3@email.com', 'a3');
