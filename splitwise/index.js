import SplitWise from "./Splitwise.js";

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
}

const splitwise = new SplitWise();
splitwise.addUser(User.user1);
splitwise.addUser(User.user2);
splitwise.addUser(User.user3);
splitwise.addUser(User.user4);

splitwise.addTransaction(User.user4);

