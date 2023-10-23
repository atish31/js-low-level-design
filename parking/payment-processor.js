class PaymentProcessor {
    constructor (amount) {
        this.amount = amount;
    }
    process = function(amount) {
        return `payment for {amount} is processed`;
    }
}

class CreditCard extends PaymentProcessor {

    constructor(amount) {
        super(amount);
    }

}

class Cash extends PaymentProcessor {

    constructor(amount) {
        super(amount);
    }

}

const CreditCardPayment = new CreditCard(100);
const CashPayment = new Cash(100);

console.log(CreditCardPayment, 'payment');
console.log(Cash, 'cash');
