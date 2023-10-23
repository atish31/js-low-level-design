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

export default User;