//list of all my buttons
const allButtons = window.document.getElementsByClassName("calcButton");

//Return the specific button from the allButtons based on a string
function getButtonById(buttonName){
    return document.querySelector(`#${buttonName}`)
}

//Respond to keyboard input. These will trigger the appropriate button function to be called.
function keyPressed(e) {
	let button = e.target;	
	let buttonId = button.getId;
	switch(buttonId) {
		case "seven-button":
			break;
	}
}

window.addEventListener("keydown", keyPressed);
window.addEventListener();

//Create an object with buttons names as keys and query selectors as values. Later these query selectors will become the buttons themselves.
const elementSelectors = {
  addButton: "#add-button",
  subtractButton: ".subtract-button", // whatever query selector you need
}

const elements = {}
for (const [name, selector] of Object.entries(elementSelectors)) {
  elements[name] = document.querySelector(selector)
}

// later
elements.addButton.click()
