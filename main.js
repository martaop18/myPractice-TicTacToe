// BRINGING THE WHOLE DOCUMENT WITH THe   querySelector  METHOD
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.


const gameBoard = document.querySelector('#gameboard');
const playDisplay = document.querySelector('#playdisplay');

// CREATING BOARD CELLS ARRAY

const boardCells = ['', '', '', '', '', '', '', '', ''];

let go = 'circle'
playDisplay.textContent = 'circle goes first'

// SETTING UP FUNCTION TO CREATE THE BOARD WITH FOR-EACH
// then create a new const to build the board with a div and the 9 squares with a class

const createBoard = () => {
    boardCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    });

}

createBoard();

// CREATING FUNCTION TO PRINT CIRCLES AND CROSSES GOCLICK
function addGo(e) {
    // console.log(e.target)
const goDisplay = document.createElement('div');
goDisplay.classList.add(go);
e.target.append(goDisplay);
go = go === 'circle' ? 'cross' : 'circle'
playDisplay.textContent = "It is now " + go + "'s turn."
e.target.removeEventListener("click", addGo)
checkScore()

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    // console.log(allSquares);

    // SETING WINNING COMBOS ARRAYS
    const winningCombos = [ 
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]   
    ]
    winningCombos.forEach(array => {
        const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
        if (circleWins) {
            playDisplay.textContent = "You're the winner!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    })
}
}

