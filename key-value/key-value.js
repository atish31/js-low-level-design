
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

export default KeyValue;