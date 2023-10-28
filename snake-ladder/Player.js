class Player {
    #name;
    #id;

    set Name(_name) {
        this.#name = _name;
    }

    set id(_id) {
        this.#id = _id;
    }

    get Name() {
        return this.#name;
    }

    get id() {
        return this.#id;
    }
}