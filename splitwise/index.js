import SplitWise from "./Splitwise.js";
import { Users } from "./constants.js";
import { Transactions } from "./constants.js";

const splitwise = new SplitWise();
splitwise.addUser(Users.user1);
splitwise.addUser(Users.user2);
splitwise.addUser(Users.user3);
splitwise.addUser(Users.user4);

splitwise.addTransaction(Transactions.transaction1);
splitwise.addTransaction(Transactions.transaction2);
splitwise.addTransaction(Transactions.transaction3);


