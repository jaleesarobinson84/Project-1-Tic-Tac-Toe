let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let board = Array.from(document.getElementsByClassName('button'))

const TEXT_x = "x"
const TEXT_o = "o"
let currentPlayer = TEXT_x
let spaces = Array(9).fill(null)

const startGame = () => {
    board.forEach(button => button.addEventListener('click', buttonclicked))
}

function buttonclicked(e) {
   const button = e.target.button

   if(!spaces[button]) {
    spaces[button] = currentPlayer
    e.target.innerText = currentPlayer

    if(playerWon() !==false) {
        playerText = `${currentPlayer} has won!`
        
    }

    currentPlayer = currentPlayer == TEXT_x ? TEXT_o : TEXT_x
   }
}

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerWon() {
    for(const condition of winningPattern) {
        let [a, b, c] = condition
    
        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return[a,b,c]
        }
    }
return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    board.forEach( button => {
        button.innerText = ''
    })

    playerText = 'Tic Tac Toe'
    
    currentPlayer = TEXT_x

}

startGame()




