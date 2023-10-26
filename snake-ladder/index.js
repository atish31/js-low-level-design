import Board from './Board.js';

const snakesOnBoard = [
    [25, 3],
    [43, 23],
    [67, 17],
    [84, 45],
    [99, 1],
];

const laddersOnBoard = [
    [5, 20],
    [23, 73],
    [15, 98],
    [45, 85],
    [67, 88],
];

const board = new Board();
board.Board = 100;
for(const snake of snakesOnBoard) {
    board.Snakes = snake;
}

for(const ladder of laddersOnBoard) {
    board.Ladders = ladder;
}
console.log(board.Board, '||| board');
console.log(board.Snakes, '||| snakes');
console.log(board.Ladders, '||| ladders');
