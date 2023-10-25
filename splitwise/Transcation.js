class Transaction {
    #id;
    #payer;
    #payee;
    #expenseType;
    #distribution;
    #amount;

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

    set Distribution(distribution) {
        this.#distribution = distribution;
    }

    set Amount(amount) {
        this.#amount = amount;
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

    get Distribution() {
        return this.#distribution;
    }

    get Amount() {
        return this.#amount;
    }

    static createTransaction(transactionDetails) {
        let transaction = new Transaction();
        transaction.Payer = transactionDetails.payer;
        transaction.Payee = transactionDetails.payee;
        transaction.ExpenseType = transactionDetails.expenseType;
        transaction.Distribution = transactionDetails.distribution;
        transaction.Amount = transactionDetails.amount;
        return transaction;
    }
}

export default Transaction;