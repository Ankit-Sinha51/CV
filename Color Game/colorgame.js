var numSelector = 6
var colors = generateRandomColors(numSelector);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easybtn = document.querySelector("#easybtn")
var hardbtn = document.querySelector("#hardbtn")


easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected")
	hardbtn.classList.remove("selected")
    numSelector = 3
	colors = generateRandomColors(numSelector);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	message.textContent = "";

	for (var i = 0; i < square.length; i++) {
	 if (colors[i]) {
	 	 square[i].style.background = colors[i];
	 	}else{
	 		square[i].style.display = "none";
	 	}
	}    
})

hardbtn.addEventListener("click",function(){
		easybtn.classList.remove("selected")
	hardbtn.classList.add("selected")

    numSelector = 6
	colors = generateRandomColors(numSelector);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	message.textContent = "";

	for (var i = 0; i < square.length; i++) {
	 	 square[i].style.background = colors[i];
	 		square[i].style.display = "block";
	 	}
	})


reset.addEventListener("click",function(){
	colors = generateRandomColors(numSelector);
	pickedColor = pickColor();
	h1.style.background = "steelblue"
	reset.textContent = "New Colors"
	message.textContent = "";

	for (var i = 0; i < square.length; i++) {
		square[i].style.background = colors[i];

	colorDisplay.textContent = pickedColor;
	}

})


for (var i = 0; i < square.length; i++) {
	square[i].style.background = colors[i];
    colorDisplay.textContent = pickedColor;

    square[i].addEventListener("click",function(){
    	var clickedColor = this.style.background;
    	if (clickedColor === pickedColor) {
    		message.textContent = "Correct!!";
    		changeColor(clickedColor);
    		h1.style.background = pickedColor;
            reset.textContent = "Play Again?"

    	}else{
    		this.style.background ="#232323";
    		message.textContent = "Try Again!!"
    	}
    })
}

function changeColor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
		
	}
}


function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i <num; i++) {
		arr.push(chooseColor());
	}
     return arr;
}


function chooseColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}


function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}