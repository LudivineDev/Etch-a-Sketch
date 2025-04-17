
    const container = document.querySelector(".grid-container");
   
    function createGrid(gridSize) {
        container.innerHTML = ''; // clear previous squares
        const totalSquares = gridSize * gridSize;
    
        const squareSize = container.clientWidth / gridSize; // dynamically size squares
    
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
    
            // hover trail effect
            square.addEventListener('mouseenter', () => { //mouseenter check only once per square vs mousemove
                square.style.backgroundColor = 'violet';
            });
    
            container.appendChild(square);
        }
    }
    
    // Load default 16x16 grid
    createGrid(16);

       
  // Reset button: clears grid colors
document.getElementById("reset").addEventListener("click", () => {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
});

// "User Square" button: prompts user for new grid size
document.getElementById("user-square").addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (1 - 100):");
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});