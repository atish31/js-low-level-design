class Terminal {
    constructor(id) {
        this.id = id;
    }
}

class entryTerminal extends Terminal {
    constructor(id) {
        super(id)
    }

    getTicket = function() {
        console.log(
            'get ticket'
        );
    }
}

class exitTerminal extends Terminal {
    constructor (id) {
        super(id);
    }

    acceptTicket = function() {
        console.log('accept');
    }
}

const terminal1 = new entryTerminal(1);
const terminal2 = new entryTerminal(2);

const terminal3 = new exitTerminal(3);
const terminal4 = new exitTerminal(4);

terminal1.getTicket();
terminal3.acceptTicket();

