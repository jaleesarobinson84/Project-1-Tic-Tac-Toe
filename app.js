const board = document.getElementbyId('.button-select')
let restartBtn = document.getElementbyId('restart')
const players = ['X', 'O']
let currentPlayer = players[0]

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

// Player 'X' goes first
let xTurn = true;
let count = 0;

