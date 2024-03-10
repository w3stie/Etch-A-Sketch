document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 16;
    let userColor = '#000000'; // Default color
    let isRandomColorEnabled = false; // Track the state of random color

    function createGrid(size) {
        grid.innerHTML = ''; //clears existing grid
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //Adjust grid columns

        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            grid.appendChild(gridSquare);
        }

        // Add hover effect
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                if (isRandomColorEnabled) {
                    square.style.backgroundColor = randomizeColor();
                } else {
                    square.style.backgroundColor = userColor;
                }
            });
        });
    }

    createGrid(gridSize);

    const pixelSizeSlider = document.getElementById('change-size');
    const pixelSizeLabel = document.getElementById('pixel-size-label');

    pixelSizeSlider.addEventListener('input', () => {
        gridSize = pixelSizeSlider.value;
        pixelSizeLabel.textContent = `${gridSize} x ${gridSize}`;
        createGrid(gridSize);
    });

    function randomizeColor() {
        const randomColor = Math.floor(Math.random() * 16777215);
        // Convert the random value to hexadecimal and pad it with zeros if necessary
        const hexColor = '#' + randomColor.toString(16).padStart(6, '0');
        return hexColor;
    }

    const randomColorBtn = document.getElementById('random-color-btn');
    randomColorBtn.addEventListener('click', () => {
        isRandomColorEnabled = !isRandomColorEnabled; // Toggle the state
        randomColorBtn.textContent = isRandomColorEnabled ? 'Disable Random Color' : 'Enable Random Color';
    });

    function changeColor() {
        const colorPicker = document.getElementById('color-picker');
        colorPicker.addEventListener('input', () => {
            userColor = colorPicker.value;
        });
    }
    changeColor();

    const clearGridButton = document.querySelector('#clear-grid');

    clearGridButton.addEventListener('click', () => {
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.style.backgroundColor = '#ccc'; // Reset background color to white
        });
    });
});
