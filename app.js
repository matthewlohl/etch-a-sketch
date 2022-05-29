const grid = document.querySelector('.grid');
let gridSize = 8;


// Test function
document.getElementById("test").addEventListener("click", createDiv);
document.getElementById("test").addEventListener("click", createGrid);

// Create Square Divs
function createDiv(size){
    const div = document.createElement('div');
    div.classList.add('box');
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
            grid.appendChild(createDiv(Math.ceil(((grid.clientWidth-0.5*2*gridSize)/gridSize))));
        }
    }
    console.log((grid.clientWidth/gridSize)-0.5*2*gridSize);
    console.log((63+0.5*2)*8);
    console.log(grid.clientWidth);
}



// ----- Turn Box into Black ---- //
//Add 'active' class to hovered boxes
grid.addEventListener('mouseover', function(e){
    //add active class to the boxes that were hovered
    if (e.target.matches('.box')){
        e.target.classList.add('active')
    }
    if (e.target.matches('active')){
        e.target.style.backgroundColor = 'blue';
    }
});


