class UserTransaction {
    #id;
    #userId;
    #transactionId;
    #transactionType;
    #amount;
    constructor() {
        this.#id = 1;
    }

    set UserId(userId) {
        this.#userId = userId;
    }

    set TransactionId(transactionId) {
        this.#transactionId = transactionId;
    }

    set TransactionType(transactionType) {
        this.#transactionType = transactionType;
    }

    set Amount(amount) {
        this.#amount = amount;
    }

    get UserId() {
        return this.#userId;
    }

    get TransactionId() {
        return this.#transactionId;
    }

    get TransactionType() {
        return this.#transactionType;
    }
    
    get Amount() {
        return this.#amount;
    }

    static createUserTransaction(userId, transactionId, transactionType, amount) {
        let userTransaction = new UserTransaction();
        userTransaction.UserId = userId;
        userTransaction.TransactionId = transactionId;
        userTransaction.TransactionType = transactionType;
        userTransaction.Amount = amount;
        return userTransaction;
    }
}

export default UserTransaction;
