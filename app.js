const board = document.querySelectorAll("button");
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

let playerX = true;
let count = 0;



const winChecker = () => {

    for (let i of winningCombo) {
      let [element1, element2, element3] = [
        board[i[0]].innerText,
        board[i[1]].innerText,
        board[i[2]].innerText,
      ];
       
    if (element1 != "" && (element2 != "") & (element3 != "")) {
        if (element1 == element2 && element2 == element3) {
          
          winFunction(element1);
        }
      }
    }
  };
  board.forEach((element) => {
    element.addEventListener("click", () => {
      if (playerX) {
        playerX = false;
        
        element.innerText = "X";
        element.disabled = true;
      } else {
        playerX = true;
        
        element.innerText = "O";
        element.disabled = true;
      }
      
      count += 1;
      if (count == 9) {
        drawFunction();
      }
      
      winChecker();
    });
  });


