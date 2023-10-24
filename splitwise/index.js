import SplitWise from "./Splitwise.js";
import { Users } from "./constants.js";
import { Transactions } from "./constants.js";

const User = {
    user1: {
        'name': 'a1',
        'email': 'a1@email.com',
        'phone': 1234,
    },
    user2: {
        'name': 'a2',
        'email': 'a2@email.com',
        'phone': 2234,
    },
    user3: {
        'name': 'a3',
        'email': 'a3@email.com',
        'phone': 3234,
    },
    user4: {
        'name': 'a4',
        'email': 'a4@email.com',
        'phone': 4234,
    },
};

const splitwise = new SplitWise();
splitwise.addUser(Users.user1);
splitwise.addUser(Users.user2);
splitwise.addUser(Users.user3);
splitwise.addUser(Users.user4);

splitwise.addTransaction(User.user4);

