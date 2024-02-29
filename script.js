const grid = document.querySelector('#grid');
const changeSize = document.querySelector('#change-size');

document.addEventListener('DOMContentLoaded', () => {
    let gridSize = 16;

    function createGrid (size){
        grid.innerHTML = '' //clears existing grid
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)` //Adjust grid columns
        
        for (let i=0; i < gridSize * gridSize; i++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            grid.appendChild(gridSquare);
        }
        
        // Add hover effect
        const gridSquares = document.querySelectorAll('.grid-square');
        gridSquares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black'; // Change color on hover
            });
        });
    }

    createGrid(gridSize);

    changeSize.addEventListener('click', () => {
        let gridNumber = prompt("How Many Squares Do You Want for Your Grid?");
        console.log("Entered grid number:", gridNumber);
      
            if (gridNumber && !isNaN(gridNumber) && gridNumber > 0){
                gridNumber = parseInt(gridNumber);
                if ( gridNumber <= 100){
                gridSize = gridNumber;
                createGrid(gridSize);
            } else {
                alert("Maximum Number allowed is 100");}
            } else {
                alert('Please enter a valid number greater than 0.');}
            });
});
