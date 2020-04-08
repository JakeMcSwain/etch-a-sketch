var mainDiv = document.getElementById('container');
var number = prompt('How many pixels per row would you like?');
var area = number * number;
var resetButton = document.getElementById('resetButton');
var colorButton = document.getElementById('colorButton');
var rainbowButton = document.getElementById('rainbowButton');




generateDivs(number);

resetButton.addEventListener('click', resetGrid);
colorButton.addEventListener('click', changeColor);
rainbowButton.addEventListener('click', rainbowColor);

function generateDivs(number) {
    mainDiv.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    mainDiv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        for (i=1; i <= area; i++) {
            var newDiv = document.createElement('div');
            newDiv.classList.add('newGrid');
            mainDiv.appendChild(newDiv);
        };
}

const effect = document.querySelectorAll('.newGrid')
effect.forEach(function(effect) {
    effect.addEventListener ('mouseover' , function() {
        effect.style.backgroundColor = 'black';
    })
})


function regenerateDivs(newNumber) {
    mainDiv.style.gridTemplateRows = `repeat(${newNumber}, 1fr)`;
    mainDiv.style.gridTemplateColumns = `repeat(${newNumber}, 1fr)`;
    var newArea = newNumber * newNumber;
        for (i=1; i <= newArea; i++) {
            var redo = document.createElement('div');
            redo.classList.add('newGrid');
            mainDiv.appendChild(redo);
            console.log("done");
        }
}
function resetGrid() {
    while(mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
    closeLoop();
};

function closeLoop() {
    var newNumber= prompt('How many pixels this time partner?');
    regenerateDivs(newNumber);
    console.log('check')
    const effect = document.querySelectorAll('.newGrid')
        effect.forEach(function(effect) {
            effect.addEventListener ('mouseover' , function() {
                effect.style.backgroundColor = 'black';
    })
})
}

function changeColor() {
    var selectedColor= (function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }) ();
    const effect = document.querySelectorAll('.newGrid')
    effect.forEach(function(effect) {
        effect.addEventListener ('mouseover' , function() {
            effect.style.backgroundColor = selectedColor;
    })
})
}

function rainbowColor() {
    const effect = document.querySelectorAll('.newGrid')
    effect.forEach(function(effect) {
        effect.addEventListener ('mouseover' , function() {
            var selectedColor= (function () {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }) (); 
            effect.style.backgroundColor = selectedColor;
        });
    })
}