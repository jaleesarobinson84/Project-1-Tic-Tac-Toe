const board = document.querySelectorAll("button");
const restartBtn = document.getElementById("restart");
const winnerPop = document.getElementById("winner-popup");
const winnerMessage = document.getElementById("winnerMessage")

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
let count = 0;

function showPopUp(winner) {
  winnerPop.style.display = "flex";
  if (winner === "draw") {
    winnerMessage.innerText = "It's a Draw!";
  } else {
    winnerMessage.innerText = `Player ${winner} wins!`;
  }
}


// Win Logic
const checkWin = () => {
  for (let combo of winningCombo) {
    let [element1, element2, element3] = [
      board[combo[0]].textContent,
      board[combo[1]].textContent,
      board[combo[2]].textContent,
    ];
  
    //If 3 empty elements are same give the win
    if (element1 !== "" && element1 === element2 && element2 === element3) {
      // If all three buttons have the same values, it's a win
      showPopUp(element1);
      return; // Exit the loop since the game is won
    }
  }

  if (count === 9) {
    showPopUp("draw");
  }
};

function resetBoard() {
  board.forEach((button) => {
    button.textContent = "";
  });
  winnerPop.style.display = "none";
  count = 0;
  currentPlayer = "X";
}


// X or O Display
board.forEach(board => {
  board.addEventListener('click', () => {
    if (board.textContent === '') {
      board.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      count += 1;
      checkWin(); // Check for win or draw after each move
    }
  });
});

restartBtn.addEventListener("click", resetBoard);

