class User {
    #id;
    #name;
    #email;
    #phone;
    
    constructor() {
        this.#id = 0;
    }
    
    set id(id) {
        this.#id = id;
    }
    
    set Name(name) {
        this.#name = name;
    }
    set Email(email) {
        this.#email = email;
    }
    set Phone(phone) {
        this.#phone = phone;
    }

    get id() {
        return this.#id;
    }

    get Name() {
        return this.#phone;
    }
    
    get Email() {
        return this.#phone;
    }

    get Phone() {
        return this.#phone;
    }

    static createUser(userDetails) {
        let user = new User();
        user.id = userDetails.id;
        user.Email = userDetails.email;
        user.Phone = userDetails.phone ;
        return user;
    }
}

export default User;