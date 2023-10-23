import User from "./User.js";
import Transaction from "./Transcation.js";
import UserTransaction from "./UserTransaction.js";

const user0 = User.createUser(1230, '1@email.com', 'a0');
const user1 = User.createUser(1231, '1@email.com', 'a1');
const user2 = User.createUser(1232, '1@email.com', 'a2');
const user3 = User.createUser(1233, '1@email.com', 'a3');

console.log(user0.Name, user1.Name, user2.Name, user3.Name);

class SplitWise {
    #users;
    constructor() {
        this.users = [];
    }
    get Users() {
        return this.#users;
    }
    addUser() {
        const user = User.createUser(1230, '1@email.com', 'a0');
        this.#user.push(user);
    }
}
