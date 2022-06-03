const grid = document.querySelector('.grid');
const applyGridSize = document.querySelector('.ApplyGrid');
const sliderValue=document.getElementById('slider');
let gridSize = 10;

// ---- Create Grids ----
function createGrid(){
    //use 2 for loops to create the squares
    for (i = 0; i<256; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', function(e){
            // Grab target add .active class
            e.target.classList.add('active');
        })
        grid.appendChild(div);
    }
};

// ---- Remove Child from div --- //
function removeChildGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}


// ----- Get new control value and reapply to Div Child---- //
//document.getElementById('ApplyGrid').addEventListener('click', reset);
slider.addEventListener('input',function(){
    removeChildGrid();
    console.log(sliderValue.value);
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderValue.value},2fr); grid-template-rows: repeat(${sliderValue.value},2fr);`);
    for (i = 0; i <sliderValue.value*sliderValue.value; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover',function(e){
            e.target.classList.add('active');
        })
        grid.appendChild(div);
    }
});

/*applyGridSize.addEventListener('click', function(){
    reset ();
})
*/
createGrid();
