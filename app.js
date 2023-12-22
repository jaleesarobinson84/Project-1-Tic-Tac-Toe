const board = document.getElementById('button-select')
let newGameBtn = document.getElementById('new-game')
let restartBtn = document.getElementById('restart')
const players = ['X', 'O']
let currentPlayer = players[0]
const winningMessage = document.getElementById('winningMessage')
const winningMessageTextElement = document.getElementById('winningMessageText')

// Winning Pattern
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

// Button Disable All (start and restart)
const disableButtons = () => {
    btnRef.forEach(element => (element.disabled = true)); {
        // popup enabled
        popupRef.classList.remove('hide');
    };

    // enable all buttons (for new game and restart)
const enableButtons = () => {
    board.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // popup disabled
    popupRef.classList.add('hide');
};
}

// New Game
newGameBtn.addEventListener('click', () => {
    count = 0
    enableButtons();
});

restartBtn.addEventListener('click', () => {
    count = 0
    enableButtons();
});


// Display X/O with click
board.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            // Display X
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            // Display O
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        // each click check for win
        winChecker();
    });
});





window.onload = enableButtons;
