import GenerateId from "./GenerateId.js";
class User {
    #id;
    #name;
    #email;
    #phone;
    
    constructor() {
        this.#id = 0;
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
        user.id = GenerateId.getUserId();
        user.Name = userDetails.name;
        user.Email = userDetails.email;
        user.Phone = userDetails.phone ;
        console.log(user.id, '###id');
        return user;
    }
}

export default User;