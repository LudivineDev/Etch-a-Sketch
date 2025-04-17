const container = document.querySelector(".grid-container");
const gridSize = 16;
const totalSquares =  gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement(`div`);
    square.classList.add(`grid-square`);
    container.appendChild(square);

     //  Add the trail effect
     square.addEventListener('mouseenter', () => { // mouseenter only fire once per square compare to mousemove
        square.style.backgroundColor = 'violet'; 
      });
    
      container.appendChild(square);
    }

