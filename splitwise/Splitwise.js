import User from "./User.js";
import Transaction from "./Transcation.js";
import UserTransaction from "./UserTransaction.js";

let userTransactions = {
    'u1': {
        'u2': 0,
        'u3': 0,
        'u4': 0,
    },
    'u2': {
        'u1': 0,
        'u2': 0,
        'u3': 0,
    },
    'u3': {
        'u1': 0,
        'u2': 0,
        'u3': 0,
    },
    'u4': {
        'u1': 0,
        'u2': 0,
        'u3': 0,
    },
};

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
        const payer = transaction.Payer;
        const payerBalances = userTransactions[transaction.Payer];
        const payeeList = transaction.Payee; 
        const amount = transaction.Amount;
        let newAmount;
        if(transaction.Distribution === null) {
            transaction.Distribution = this.calculateDistribution(transaction);
        }
        for(const payee of payeeList) {
            const payerBalance = payerBalances[payee];
            const payeeBalance =  userTransactions[payee][payer];
            const index = payeeList.indexOf(payee);
            if(transaction.ExpenseType === 'percent') {
                newAmount = (transaction.Distribution[index] / 100) * amount;
            } else {
                newAmount = transaction.Distribution[index];
            }

            if(payerBalance >= amount) {
                userTransactions[payer][payee] = payerBalance - amount;
            } else {
                 userTransactions[payee][payer] = newAmount + (payeeBalance || 0) - (payerBalance || 0);  
                 userTransactions[payer][payee] = 0;
            }

         }

         console.log(userTransactions, 'transaction')
    }

    calculateDistribution(transaction) {
        const payeeLength = transaction.Payee.length;
        const equalAmount = (transaction.Amount / (payeeLength + 1));
        const distribution = new Array(payeeLength).fill(equalAmount);
        return distribution;
    }
}

export default SplitWise;
