import {pubsub} from './pubsub.js';

export const completedToDos = {
    list: [],
    showToDos: true,
    div: document.getElementById("completedToDosDiv"),

    toggle: function() {
        if (completedToDos.showToDos == false){
            completedToDos.showToDos = true;
            completedToDos.refreshAndDisplay();
        }
        else if (completedToDos.showToDos == true){
            console.log("1completedToDos.showToDos" + completedToDos.showToDos + "but it won't be soon.");
            completedToDos.showToDos = false;
            while (completedToDos.div.firstChild) {
                completedToDos.div.removeChild(completedToDos.div.firstChild);
            }
        }
    },

    refreshAndDisplay: function() {
        console.log("2completedToDos.showToDos" + completedToDos.showToDos + "but it won't be soon.");
        completedToDos.showToDos = true;
        completedToDos.list.forEach(element => {
            completedToDos.div.appendChild(element);
        });
    },

    addToDoToCompleted: function(inputText) {
        //debugger;
        console.log("method call");
        const completedToDo = document.createElement("button");
        completedToDo.innerHTML = inputText;
        completedToDo.addEventListener("click", () =>{
            completedToDo.remove();
            completedToDos.list.forEach((button, index) => {
                if (button.innerHTML == inputText){
                    completedToDos.list.splice(index, 1);
                }
            })
            pubsub.publish('toDoUnDeleted', inputText);
        })
        completedToDo.classList.add("standardButton");
        completedToDo.classList.add("completedToDo");
        completedToDos.list.push(completedToDo);
        completedToDos.list.forEach(item =>{
            console.log(item);
        })
        if (completedToDos.showToDos){
            completedToDos.refreshAndDisplay();
        }
    },
}


const completedToDoButton = document.getElementById("completedToDoButton");
completedToDoButton.addEventListener("click", completedToDos.toggle);
pubsub.subscribe('toDoCompleted', completedToDos.addToDoToCompleted);