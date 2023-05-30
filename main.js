// BRINGING THE WHOLE DOCUMENT WITH THe   querySelector  METHOD
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.


const gameBoard = document.querySelector('#gameboard');
const howToPlay = document.querySelector('#howtoplay');

// CREATING BOARD CELLS ARRAY

const boardCells = ['', '', '', '', '', '', '', '', ''];

// SETTING UP FUNCTION TO CREATE THE BOARD WITH FOR-EACH
// then create a new const to build the board with a div and the 9 squares with a class

const createBoard = () =>  {
    boardCells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index
        cellElement.addEventListener('click', goClick)
        gameBoard.append(cellElement)
    })

}
createBoard();

// CREATING FUNCTION TO PRINT CIRCLES AND CROSSES GOCLICK