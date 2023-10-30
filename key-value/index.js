import Key from "./Key.js";
import Value from './Value.js';
import KeyValuePair from './key-value.js';
import Db from './db.js';
import readline from 'readline';


const keyInsatance = new Key;
const valueInstance = new Value;
const db = new Db();
function insertIntoDb(key, value) {
    keyInsatance.Key = key;
    valueInstance.Value = value;
    const validKey = keyInsatance.Key;
    const validValue = valueInstance.Value;
    const keyValuePair = {};
    keyValuePair[validKey] = validValue;
    db.insertIntodb(keyValuePair);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('TYPE YOUR COMMAND: ', (input) => {
    if(input = 'PUT') {
        createKeyValuePair();
    }
});

function createKeyValuePair() {
    rl.question('KEY:', (key) => {
        rl.question('VALUE:', (value) => {
            insertIntoDb(key, value);
        });
    });
}


