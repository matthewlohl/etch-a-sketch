const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');
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


slider.addEventListener('input',function(){
    removeChildGrid();
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderValue.value},2fr); grid-template-rows: repeat(${sliderValue.value},2fr);`);
    for (i = 0; i <sliderValue.value*sliderValue.value; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover',function(e){
            e.target.classList.add('active');
        });
        grid.appendChild(div);
    };
});


reset.addEventListener('click', function(){
    removeChildGrid();
    grid.setAttribute('style', `grid-template-columns: repeat(${sliderValue.value},2fr); grid-template-rows: repeat(${sliderValue.value},2fr);`);
    for (i = 0; i <sliderValue.value*sliderValue.value; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover',function(e){
            e.target.classList.add('active');
        });
        grid.appendChild(div);
    };
});


/*reset.addEventListener('click',resetGrid(){
    console.log(divReset);
}
);*/

//function resetGrid(){
    
    //divReset.classList.add('reset');
    //}

createGrid();
