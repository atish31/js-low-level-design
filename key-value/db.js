class Db {
    constructor() {
        this.db = [];
    }

    insertIntodb(keyValue) {
        this.db.push(keyValue);
        console.log(this.db, 'dbdbdb');
    }
}

export default Db;