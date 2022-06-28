var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var sixBtn = document.querySelector("#sixButton");
var nineBtn = document.querySelector("#nineButton");


sixBtn.addEventListener("click", function(){
	//highlight button to show selected
	nineBtn.classList.remove("selected");
	sixBtn.classList.add("selected");
	//set number of squares to 6
	numSquares = 6;
	//change colors to 6
	colors = generateRandomColors(numSquares);
	//reset winning color
	pickedColor = randomColorG();
	//change display to show new picked color
	colorDisplay.textContent = pickedColor;
	//loop through 6 squares and reset colors while displaying none for squares without new reset colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

nineBtn.addEventListener("click", function(){
	sixBtn.classList.remove("selected");
	nineBtn.classList.add("selected");
	numSquares = 9;
	colors = generateRandomColors(numSquares);
	pickedColor = randomColorG();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = randomColorG();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//set winning color highlight back to default
	h1.style.background = "steelblue"; 
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Yay...Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
		}	else {
			this.style.backgroundColor = "#FFFFFF";
			messageDisplay.textContent = "Oops...Try Again";
		}
		});
}

function changeColors(colorz){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = colorz;
	}	
}

function randomColorG(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}