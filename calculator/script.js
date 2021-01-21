//list of all my buttons
const allButtons = window.document.getElementsByClassName("calcButton");

//Return the specific button from the allButtons based on a string
function getButtonById(buttonName){
    return document.querySelector(`#${buttonName}`)
}

