class Key {
    #key;
    
    set Key(_key) {
        this.#key = _key;
    }

    get Key () {
        return this.#key;
    }
}

export default Key;