// FUNCTIONS 

// Make a square grid
function makeDiv (container) {
    const div = document.createElement('div');
    div.classList.add('square');

    container.appendChild(div);
}

// Color randomizer
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 75%, 75%, 1)';
}

// Add listener event to squares
function listenToSquares () {
    const squares = document.querySelectorAll('.square');
    squares.forEach( (square) => {
        square.addEventListener('mouseover', (e) => {
            if (!square.getAttribute('class').includes('colored')) {
                square.classList.add('colored');
                e.target.style.background = randomHsl();
            }
        });
    });
}

// Delete current grid
function deleteGrid () {
    const squares = document.querySelectorAll('.square');
    squares.forEach( (square) => {
        square.remove();
    });
}

function makeGrid (container, size) {
    const gridTemplateStr = `${Math.floor(1200/size)}px `;

    container.style.gridTemplateColumns = gridTemplateStr.repeat(size);
    container.style.gridTemplateRows = gridTemplateStr.repeat(size);

    for (let i = 0; i < size*size; i++) {
        makeDiv(container);
    }    
}

// PAGE INTERACTIVITY

// Create 16 x 16 grids
const container = document.querySelector('.container');
for (let i = 0; i < 16 * 16; i++)
    makeDiv(container);

// Add listener events to grid
listenToSquares();

// Listen to button for changing size of grid
const sizeButton = document.querySelector('#change-size');
sizeButton.addEventListener('click', () => {

    // Ask for size
    let size = Math.floor(prompt("Enter Grid Size: "));

    if (size > 100) {
        alert('Too large! Setting to 100.')
        size = 100;
    }
    else if (!size) {
        alert('Please enter a value');
        return;
    }

    // Delete current grid
    deleteGrid();

    // Make new grid
    makeGrid(container, size);

    // Add listener event
    listenToSquares();
});