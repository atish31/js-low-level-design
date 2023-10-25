import SplitWise from "./Splitwise.js";
import { Users } from "./constants.js";
import { Transactions } from "./constants.js";

const splitwise = new SplitWise();

for(const user of Users) {
    splitwise.addUser(user);
}

for(const transaction of Transactions) {
    splitwise.addTransaction(transaction);
}




