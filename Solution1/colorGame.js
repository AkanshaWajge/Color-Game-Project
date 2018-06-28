var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
//change the background color of h1 once the user selects the right color
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
 hardBtn.classList.remove("selected");
 easyBtn.classList.add("selected");
 numSquares = 3;
 colors = generateRandomColors(3);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i<squares.length; i++){
     if (colors[i]){
         squares[i].style.backgroundColor = colors[i];
     }
     else{
         squares[i].style.display = "none";
     }
 }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i<squares.length; i++){
    
         squares[i].style.backgroundColor = colors[i];
    
         squares[i].style.display = "block";
     }
});

for(var i = 0; i <squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add quick listeners to squares
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
    //grab color of clicked square
    //compare color of picked color
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!!";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
    }
    else{
        this.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "Try Again!";
    }

    });
}

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

function changeColors(color){
    //loop through all sqaures
    for(var i = 0; i <squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make array
var arr = [];
//repeat num times
for(var i = 0; i < num; i++){
    //get random color and push into an array
   arr.push(randomColor());
}
//return that array 
return arr;
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", " + b + ")";
    
}



//reset colors
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    this.textContent = "New Colors";
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to matched picked colors
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    //change the colors of the squares
    for( var i = 0; i <squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
  h1.style.backgroundColor = "steelblue";
    
})