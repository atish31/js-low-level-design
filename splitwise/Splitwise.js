import User from "./User.js";
import Transaction from "./Transcation.js";
import UserTransaction from "./UserTransaction.js";

class SplitWise {
    #users;
    #transactions;
    constructor() {
        this.#users = [];
        this.transactions = [];
    }
    set Users(details) {
        this.#users.push(user);
    }
    set Transactions(details) {
        const transaction = Transaction.createTransaction(details.payer, details.payee, details.expenseType)
        this.#transactions.push(transaction);
    }
    get Users() {
        return this.#users;
    }
    get Transactions() {
        return this.#transactions;
    }

    addUser(details) {
        const user = User.createUser(details);
        console.log(user.id, '###id');
        this.#users.push(user);
    }

    addTransaction(details) {
        const transaction = Transaction.createTransaction(details);
        console.log(transaction, '/// user');
    }
}

export default SplitWise;
