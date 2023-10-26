class Board {
    #board;
    #snakes;
    #ladders;
    constructor() {
        this.#snakes = [];
        this.#ladders = [];
        this.#board = [];
    }

    set Board(maxCount) {
        for(let i = 1; i <= maxCount; i++) {
            this.#board.push(i);
        }
    }

    get Board() {
        return this.#board;
    }

    set Snakes(boardPoints) {
        this.#snakes.push(boardPoints);
    }

    get Snakes() {
        return this.#snakes;
    }

    set Ladders(boardPoints) {
        this.#ladders.push(boardPoints);
    }

    get Ladders() {
        return this.#ladders;
    }
}

export default Board;