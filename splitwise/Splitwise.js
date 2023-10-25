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
        this.#users.push(user);
    }

    addTransaction(details) {
        const transaction = Transaction.createTransaction(details);
        let userTransactions = {
            'u1': {
                'u2': 1,
                'u3': 2,
                'u4': 3,
            }
        };

        if(transaction.Distribution === null) {
            transaction.Distribution = this.calculateDistribution(transaction);
        }

        let payer = userTransactions[transaction.Payer];
        for(let payee of transaction.Payee) {
            let balance = payer[payee];
            const index = transaction.Payee.indexOf(payee);
            userTransactions[transaction.Payer][payee] = balance + transaction.Distribution[index];       
         }
    }

    calculateDistribution(transaction) {
        const payeeLength = transaction.Payee.length;
        const equalAmount = (transaction.Amount / (payeeLength + 1));
        const distribution = new Array(payeeLength).fill(equalAmount);
        return distribution;
    }
}

export default SplitWise;
