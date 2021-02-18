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
        console.log("A new todo was created with data: " + inputText);
        const newToDo = document.createElement("button");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.classList.add("standardButton");
        deleteButton.innerHTML = "x";
        deleteButton.addEventListener("click", (event) => {
            const deleteButton = event.target;
            const toDoToDelete = deleteButton.parentElement;
            toDoToDelete.remove();
        })
        newToDo.innerHTML = inputText;
        deleteButton.addEventListener("click", () => {
            event.stopPropagation();
        })
        newToDo.addEventListener("click", () =>{
            newToDo.remove();
            pubsub.publish('toDoCompleted', inputText);
        })
        newToDo.classList.add("standardButton");
        newToDo.classList.add("ToDo");
        newToDo.appendChild(deleteButton);
        toDoListDiv.appendChild(newToDo);
        pubsub.publish('toDoAdded', inputText);
    },
}

pubsub.subscribe('toDoUnDeleted', toDoList.createNewToDo);