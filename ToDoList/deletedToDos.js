import {pubsub} from './pubsub.js';

export const deletedToDos = {
    list: [],
    showToDos: false,
    div: document.getElementById("deletedToDosDiv"),

    toggle: function() {
        console.log("toggle was called");
        if (deletedToDos.showToDos == false){
            this.showToDos = true;
            this.list.forEach(element => {
                this.div.appendChild(element);
            });
        }
        if (deletedToDos.showToDos == true){
            deletedToDos.showToDos = false;
            deletedToDos.list.forEach(element => {
                deletedToDosDiv.remove(element);
            });
        }
    },

    addToDoToDeleted: function(inputText) {
        const deletedToDo = document.createElement("button");
        deletedToDo.innerHTML = inputText;
        deletedToDo.addEventListener("click", () =>{
            deletedToDo.remove();
            pubsub.publish('toDoUnDeleted', inputText);
        })
        deletedToDo.classList.add("standardButton");
        deletedToDo.classList.add("DeletedToDo");
        deletedToDos.list.push(deletedToDo);
    },
}


const deletedToDoButton = document.getElementById("deletedToDoButton");
deletedToDoButton.addEventListener("click", deletedToDos.toggle);
pubsub.subscribe('toDoDeleted', deletedToDos.addToDoToDeleted);