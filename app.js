const grid = document.querySelector('.grid');
let gridSize = 8;


// Test function
document.getElementById("test").addEventListener("click", createDiv);
document.getElementById("test").addEventListener("click", createGrid);

// Create Square Divs
function createDiv(size){
    const div = document.createElement("div");
    div.classList.add("box")
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    console.log(size);

    return div;
}

// Append Div to Grid
function createGrid(){
    //use 2 for loops to create the squares
    for (i = 0; i<8; i++){
        for (j = 0; j<8; j++){
            grid.appendChild(createDiv(grid.clientWidth/gridSize));
        }
    }
}


// Turn the square into Black