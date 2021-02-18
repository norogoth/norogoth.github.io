import { pubsub } from './pubsub.js';
import { toDoList } from './toDoList.js';
import { completedToDos } from './completedToDos.js';

//pubsub.subscribe('toDoAdded',toDoList.render); //TODO: Fix this.

//error message handling
const errorMessage = document.getElementById("errorMessage");
errorMessage.remove();

//

//Create Dummy To Dos
// const dummyToDo = document.createElement("button");
// const dummyToDo2 = document.createElement("button");
// dummyToDo.innerHTML = "Dummy To Do";
// dummyToDo2.innerHTML = "Dummy To Do 2";

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", () => {
    window.location.assign("../index.html");
});

function main() {
    toDoList.render();
}

main();