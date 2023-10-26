import SplitWise from "./Splitwise.js";
import { Users } from "./Constants.js";
import { Transactions } from "./Constants.js";

const splitwise = new SplitWise();

for(const user of Users) {
    splitwise.addUser(user);
}

splitwise.createUserTransancations();

for(const transaction of Transactions) {
    splitwise.addTransaction(transaction);
}




