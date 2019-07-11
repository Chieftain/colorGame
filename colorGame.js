var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            displayMessage.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
        } else {
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try again";
        }
    })
}

resetButton.addEventListener('click', function(){
    resetButton.textContent = "New colors";
    displayMessage.textContent = "";
    colors = generateRandomColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#232323';
})

function changeColors (color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
