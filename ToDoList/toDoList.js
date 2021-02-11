import {pubsub} from './pubsub.js';

const toDoListDiv = document.getElementById("ToDos");
const inputNewToDo = document.getElementById("inputNewToDo");

//Handle input
export const toDoList = {
    render: function() {
        console.log("render was called.");
        document.addEventListener("keypress", function(event) {
            const key = event.key;
            if (key == "Enter"){
                let inputText = inputNewToDo.value;
                if (inputText != ""){
                    toDoList.createNewToDo(inputText);
                }
                else {
                console.log("Nothing was entered.");
                }
                inputNewToDo.value = "";
            }
        })
    },

    createNewToDo: function(inputText) {
        const newToDo = document.createElement("button");
        newToDo.innerHTML = inputText;
        newToDo.addEventListener("click", () =>{
            newToDo.remove();
        })
        toDoListDiv.appendChild(newToDo);
        pubsub.publish('toDoAdded', inputText);
    },
}