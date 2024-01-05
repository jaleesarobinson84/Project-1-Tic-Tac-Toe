const board = document.querySelectorAll("button")
const restartBtn = document.querySelector("restart")
const resultBox = document.querySelector(".result-box")
const wonText = resultBox.querySelector("won-text")

let winningCombo = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

let currentPlayer = "X";
let count = 0

// New Game
function boardReset() {
  board.forEach(board => {
    board.textContent = "";
  });
  currentPlayer = "X";
  updateGame();
}

// Win Logic
function checkWin() {
  // all win patterns loop
  for (let pattern of winningCombo) {
    const [a, b, c] = pattern;
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      winner = board[a];
      break;
    }
  }
    return null;
}

// Check for Winner
const winner = checkWin();
if (winner) {

}

// X or O Display
board.forEach(board => {
  board.addEventListener('click', () => {
      if (board.textContent === '') {
          board.textContent = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    count += 1;
    if (count == 9) {
      drawFunction ();
    }
    checkWin();
  });
});











