
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
                let opacity = parseFloat(square.getAttribute('data-opacity')) || 0;
              
                // Set a random background color the first time
                if (!square.hasAttribute('data-base-color')) {
                  const r = Math.floor(Math.random() * 256);
                  const g = Math.floor(Math.random() * 256);
                  const b = Math.floor(Math.random() * 256);
                  square.setAttribute('data-base-color', `${r},${g},${b}`);
                  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }
              
                if (opacity < 1) {
                  opacity = Math.min(opacity + 0.1, 1);
                  square.setAttribute('data-opacity', opacity);
              
                  const [r, g, b] = square.getAttribute('data-base-color').split(',').map(Number);
              
                  // Blend base color with black using opacity math
                  const blendedR = Math.floor(r * (1 - opacity));
                  const blendedG = Math.floor(g * (1 - opacity));
                  const blendedB = Math.floor(b * (1 - opacity));
              
                  square.style.backgroundColor = `rgb(${blendedR}, ${blendedG}, ${blendedB})`;
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