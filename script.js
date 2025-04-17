
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
    
            square.addEventListener('mouseenter', () => {
                // Check current opacity level (default is 0)
                let opacity = parseFloat(square.getAttribute('data-opacity')) || 0;
              
                if (!square.style.backgroundColor) {
                  // First time: assign a random background color
                  const r = Math.floor(Math.random() * 256);
                  const g = Math.floor(Math.random() * 256);
                  const b = Math.floor(Math.random() * 256);
                  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                  square.style.position = 'relative';
                  square.setAttribute('data-opacity', 0);
                }
              
                if (opacity < 1) {
                  opacity = Math.min(opacity + 0.1, 1); // max opacity = 1
                  square.setAttribute('data-opacity', opacity);
              
                  // Apply black overlay using box-shadow (a neat trick for opacity layering)
                  square.style.boxShadow = `inset 0 0 0 1000px rgba(0, 0, 0, ${opacity})`;
                }
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