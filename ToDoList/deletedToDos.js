import {pubsub} from './pubsub.js';

export const deletedToDos = {
    list: [],
    showToDos: false,
    div: document.getElementById("deletedToDosDiv"),

    toggle: function() {
        if (deletedToDos.showToDos == false){
            deletedToDos.showToDos = true;
            deletedToDos.refreshAndDisplay();
        }
        else if (deletedToDos.showToDos == true){
            console.log("deletedToDos.showToDos" + deletedToDos.showToDos + "but it won't be soon.");
            deletedToDos.showToDos = false;
            while (deletedToDos.div.firstChild) {
                deletedToDos.div.removeChild(deletedToDos.div.firstChild);
            }
        }
    },

    refreshAndDisplay: function() {
        console.log("deletedToDos.showToDos" + deletedToDos.showToDos + "but it won't be soon.");
        deletedToDos.showToDos = true;
        deletedToDos.list.forEach(element => {
            deletedToDos.div.appendChild(element);
        });
    },

    addToDoToDeleted: function(inputText) {
        //debugger;
        console.log("method call");
        const deletedToDo = document.createElement("button");
        deletedToDo.innerHTML = inputText;
        deletedToDo.addEventListener("click", () =>{
            deletedToDo.remove();
            deletedToDos.list.forEach((button, index) => {
                if (button.innerHTML == inputText){
                    deletedToDos.list.splice(index, 1);
                }
            })
            pubsub.publish('toDoUnDeleted', inputText);
        })
        deletedToDo.classList.add("standardButton");
        deletedToDo.classList.add("DeletedToDo");
        deletedToDos.list.push(deletedToDo);
        deletedToDos.list.forEach(item =>{
            console.log(item);
        })
        if (deletedToDos.showToDos){
            deletedToDos.refreshAndDisplay();
        }
    },
}


const deletedToDoButton = document.getElementById("deletedToDoButton");
deletedToDoButton.addEventListener("click", deletedToDos.toggle);
pubsub.subscribe('toDoDeleted', deletedToDos.addToDoToDeleted);