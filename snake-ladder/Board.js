import Snake from './Snake.js';
import Ladder from './Ladder.js';
import Player from './Player.js';

class Board {
    #size;
    #snakes;
    #ladders;
    #players;

    constructor (size) {
        this.#size = size;
    }

    set Snakes(snakes) {
        this.#snakes = snakes;
    }

    set Ladders(ladders) {
        this.#ladders = ladders;
    }

    set Players(players) {
        this.#players = players;
    }

    get Size() {
        return this.#size;
    }

    get Snakes() {
        return this.#snakes;
    }

    get Ladders() {
        return this.#ladders;
    }

    get Players() {
        return this.#players;
    }
}