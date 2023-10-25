export const Users = [
    {
        'id': 'u1',
        'name': 'a1',
        'email': 'a1@email.com',
        'phone': 1234,
    },
    {
        'id': 'u2',
        'name': 'a2',
        'email': 'a2@email.com',
        'phone': 2234,
    },
    {
        'id': 'u3',
        'name': 'a3',
        'email': 'a3@email.com',
        'phone': 3234,
    },
    {
        'id': 'u4',
        'name': 'a4',
        'email': 'a4@email.com',
        'phone': 4234,
    },
];

export const Transactions = [
    {
        'id': 't1',
        'payer': 'u1',
        'payee': ['u2', 'u3', 'u4'],
        'expenseType': 'equal',
        'distribution': null,
        'amount': 1000,
    },
    {
        'id': 't2',
        'payer': 'u1',
        'payee': ['u2', 'u3'],
        'expenseType': 'exact',
        'distribution': [370, 880],
        'amount': 1250,
    },
    {
        'id': 't3',
        'payer': 'u4',
        'payee': ['u1', 'u2', 'u3'],
        'expenseType': 'percent',
        'distribution': [40, 20, 20],
        'amount': 1200,
    },
    {
        'id': 't4',
        'payer': 'u1',
        'payee': ['u4'],
        'expenseType': 'exact',
        'distribution': [200],
        'amount': 200,
    },
];