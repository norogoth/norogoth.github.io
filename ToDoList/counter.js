import {pubsub} from './pubsub.js';

const taskNumber = document.getElementById("taskNumber");
const completedNumber = document.getElementById("completedNumber");
const toDos = document.getElementById("ToDos");
const completedToDos = document.getElementById("completedToDosDiv");

export const counter = {
    tasks: 0,
    completed: 0,
    setTasks: function() {
        counter.tasks = toDos.childElementCount;
    },
    setCompleted: function() {
        try {
            counter.completed = completedToDos.childElementCount;
        }
        catch(e){
            console.log(e);
        }

    },
    updateDisplay: function() {
        counter.setTasks();
        counter.setCompleted();
        taskNumber.innerHTML = counter.tasks;
        completedNumber.innerHTML = counter.completed;
    },
}

pubsub.subscribe('toDoAdded',counter.updateDisplay);
pubsub.subscribe('toDoCompleted',counter.updateDisplay);
pubsub.subscribe('toDoUnDeleted',counter.updateDisplay);
pubsub.subscribe('toDoDeleted',counter.updateDisplay);