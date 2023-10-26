import User from "./User.js";
import Transaction from "./Transcation.js";

class SplitWise {
    constructor() {
        this.users = [];
        this.userTransactions = {};
    }

    addUser(details) {
        const user = User.createUser(details);
        this.users.push(user.id); 
    }

    createUserTransancations() {
        for(const user of this.users) {
            const transacationsPerUser = this.users.reduce((accumulator, key) => {
                if(key !== user) {
                    accumulator[key] = 0;
                }
                return accumulator;
            }, {});
            this.userTransactions[user] = transacationsPerUser;
        }
    }

    addTransaction(details) {
        const transaction = Transaction.createTransaction(details);
        const payer = transaction.Payer;
        const payeeList = transaction.Payee; 
        const payeeObject = payeeList.reduce((accumulator, key) => {
            accumulator[key] = 0;
            return accumulator;
        }, {});

        const payerBalances = this.userTransactions[payer];
        const amount = transaction.Amount;
        let newAmount;
        if(transaction.Distribution === null) {
            transaction.Distribution = this.calculateDistribution(transaction);
        }
        for(const payee of payeeList) {
            if(!this.userTransactions[payer][payee]) {
                this.userTransactions[payer][payee] = 0;
            } else if(!this.userTransactions[payee][payer]) {
                this.userTransactions[payee][payer] = 0;
            }
            const payerBalance = payerBalances[payee];
            const payeeBalance =  this.userTransactions[payee][payer];
            const index = payeeList.indexOf(payee);
            if(transaction.ExpenseType === 'percent') {
                newAmount = (transaction.Distribution[index] / 100) * amount;
            } else {
                newAmount = transaction.Distribution[index];
            }

            if(payerBalance >= amount) {
                this.userTransactions[payer][payee] = payerBalance - amount;
            } else {
                 this.userTransactions[payee][payer] = newAmount + (payeeBalance || 0) - (payerBalance || 0);  
                 this.userTransactions[payer][payee] = 0;
            }
         }

         console.log(this.userTransactions, 'transaction')
    }

    calculateDistribution(transaction) {
        const payeeLength = transaction.Payee.length;
        const equalAmount = (transaction.Amount / (payeeLength + 1));
        const distribution = new Array(payeeLength).fill(equalAmount);
        return distribution;
    }
}

export default SplitWise;
