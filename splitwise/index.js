import SplitWise from "./Splitwise.js";
import { Users } from "./constants.js";
import { Transactions } from "./constants.js";

const splitwise = new SplitWise();

for(const user of Users) {
    splitwise.addUser(user);
}

splitwise.addTransaction(Transactions.transaction1);
splitwise.addTransaction(Transactions.transaction2);
splitwise.addTransaction(Transactions.transaction3);
splitwise.addTransaction(Transactions.transaction4);



