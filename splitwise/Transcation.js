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

    set expenseType(expenseType) {
        this.#expenseType = expenseType;
    }

    get Payer() {
        return this.#payer;
    }

    get Payee() {
        return this.#payee;
    }

    get expenseType() {
        return this.#expenseType;
    }

    static createTransaction(payer, payee, expenseType) {
        let transaction = new Transaction();
        transaction.Payer = payer;
        transaction.Payee = payee;
        transaction.expenseType = expenseType;
        return transaction;
    }
}

export default Transaction;