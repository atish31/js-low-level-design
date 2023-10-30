import Key from "./Key.js";
import Value from './Value.js';
import KeyValuePair from './key-value.js';
import Db from './db.js';
// import SplitWise from "./Splitwise.js";


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

insertIntoDb('a', 'b');


