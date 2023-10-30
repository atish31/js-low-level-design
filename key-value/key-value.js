import Key from  'Key.js';
import Value from 'Value.js';

class KeyValue {
    #keyValue

    setKeyValuePair(key, value) {
        this.#keyValue = {
            key: value
        } 
        return this.#keyValue;
    }

    get KeyValuePair() {
        return this.#keyValue;
    }
}