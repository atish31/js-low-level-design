export  const Users = {
    user1: {
        'id': 'u1',
        'name': 'a1',
        'email': 'a1@email.com',
        'phone': 1234,
    },
    user2: {
        'id': 'u2',
        'name': 'a2',
        'email': 'a2@email.com',
        'phone': 2234,
    },
    user3: {
        'id': 'u3',
        'name': 'a3',
        'email': 'a3@email.com',
        'phone': 3234,
    },
    user4: {
        'id': 'u4',
        'name': 'a4',
        'email': 'a4@email.com',
        'phone': 4234,
    },
};

export  const Transactions = {
    transaction1: {
        'id': 't1',
        'payer': 'u1',
        'payee': ['u2', 'u3', 'u4'],
        'expenseType': 'equal',
        'distribution': null,
        'amount': 1000,
    },
    transaction2: {
        'id': 't2',
        'payer': 'u1',
        'payee': ['u2', 'u3'],
        'expenseType': 'exact',
        'distribution': [370, 880],
        'amount': 1250,
    },
    transaction3: {
        'id': 't3',
        'payer': 'u4',
        'payee': ['u1', 'u2', 'u3'],
        'expenseType': 'percent',
        'distribution': [40, 20, 20],
        'amount': 1200,
    },
};