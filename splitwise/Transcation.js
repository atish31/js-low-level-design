class Transaction {
    #id;
    #payer;
    #payee;
    #expenseType;

    constructor() {
        this.#id = 1;
    }

    set Payer(payer) {
        this.#payer = payer;
    }

    set Payee(payee) {
        this.#payee = payee;
    }

    set ExpenseType(expenseType) {
        this.#expenseType = expenseType;
    }

    get Payer() {
        return this.#payer;
    }

    get Payee() {
        return this.#payee;
    }

    get ExpenseType() {
        return this.#expenseType;
    }

    static createTransaction(transactionDetails) {
        let transaction = new Transaction();
        transaction.Payer = transactionDetails.payer;
        transaction.Payee = transactionDetails.payee;
        transaction.ExpenseType = transactionDetails.expenseType;
        transaction.Amount = transactionDetails.amount;
        return transaction;
    }
}

export default Transaction;