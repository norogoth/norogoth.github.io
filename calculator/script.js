//list of all my buttons
const allButtons = window.document.getElementsByClassName("calcButton");
const screen = window.document.getElementById("inputDisplay");
const backButton = document.getElementById("back-button");

let currentValue = 0;
let operand = null;
let argument = null;
let haveArg = false;

function numPress(number){
	if (!haveArg){
		currentValue = number;
	}
	if (haveArg){
		argument = number;
	}
}

function calculateNumber(){
	switch(argument){
	case "plus":
		currentValue = currentValue + argument;
		screen.value = currentValue;
		break;
	case "minus":
		currentValue = currentValue - argument;
		screen.value = currentValue;
		break;
	case "times":
		currentValue = currentValue * argument;
		screen.value = currentValue;
		break;
	case "dividedBy":
		currentValue = currentValue / argument;
		screen.value = currentValue;
		break;
	}
	operand = null;
	argument = null;
}

backButton.addEventListener("click", () => {
    window.location.assign("../index.html");
});

function pressNum(digit){
	//Check if we have an operand. If we do, we will edit the argument.
	if (operand == null){
		typeNumber(digit, "value");
	}
	else {
		typeNumber(digit, "argument");
	}

	
}

function typeNumber(digit, valueOrArgString){
	switch(valueOrArgString){
		case "value":
			currentValue *= 10;
			currentValue += digit;
			screen.value = currentValue;
			break;
		case "argument":
			argument *= 10;
			argument += digit;
			screen.value = argument;
			break;
		default:
			console.log("error on line 59");
			break;
	}
	
}

function addDigitReturnValue(number, valueOrArg){

}

function cBC() {
	currentValue = 0;
	screen.value = currentValue;
	argument = null;
	operand = null;
}
function openParenBC() {

}
function closedParenBC() {

}
function divBC() {

}
function addBC(){
	operand = "plus"
}
function minusBC() {
	operand = "minus";
}
function multiplyBC() {
	operand = "times";
}
function squareBC() {
	operand = "square";
	equalBC();
}
function sqrtBC() {
	operand = "sqrt";
	equalBC();
}

function divBC(){
	operand = "divide";
}
function equalBC(){
	if (operand == null){
		//do nothing
	}
	else {
		switch(operand){
			case "plus":
				currentValue = currentValue + argument;
				break;
			case "minus":
				currentValue = currentValue - argument;
				break;
			case "times":
				currentValue = currentValue * argument;
				break;
			case "square":
				currentValue = currentValue * currentValue;
				break;
			case "sqrt":
				currentValue = Math.sqrt(currentValue);
				break;
			case "divide":
				currentValue = currentValue / argument;
				break;
		}
		screen.value = currentValue;
		operand = null;
		argument = null;
	}
}
