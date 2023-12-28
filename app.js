const board = (document.querySelectorAll('button'));
const playerText = document.getElementById('playerText');
const restartBtn = document.getElementById('#restartBtn');

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let turnX = true;
let count = 0;

const winCheck = () => {
    for (let i of winningPattern) {
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
        if (turnX) {
            turnX = false;
            // X display
            element.innerText = 'X';
            element.disabled = true;
        } else {
            turnX = true;
            // O Display
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if(count === 9)
    }
})

const disableButtons = () => {
    board.forEach((button) => (button.disabled = true));
}

const enableButtons = () => {
    board.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
}

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "X Wins";
    } else {
        msgRef.innerHTML = "O Wins"
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "It's a Draw"
};

restartBtn.addEventListener("click", () => {
    count = 0
    enableButtons();
});

// const winCheck = () => {
//     for (let i of winningPattern) {
//         let [element1, element2, element3] = [
//             board[i[0]].innerText,
//             board[i[1]].innerText,
//             board[i[2]].innerText,
//         ];
//         if (element1 != "" && (element2 != "") & (element3 != "")) {
//             if (element1 == element2 && element2 == element3) {
//                 winFunction(element1)
//             }
//         }
//     }
// };

 board.forEach((element) => {
    element.addEventListener("click", () => {
        if (turnX) {
            turnX = false;
            element.innerText = "X";
            element.disabled =  true;
        } else {
            turnX = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winCheck();
        });
    });
 
    window.onload = enableButtons;

