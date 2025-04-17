const container = document.querySelector(".grid-container");
const gridSize = 16;
const totalSquares =  gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement(`div`);
    square.classList.add(`grid-square`);
    container.appendChild(square);

     //  Add the trail effect
     square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'violet'; // or random color
      });
    
      container.appendChild(square);
    }

