

const myGitHubButton = document.getElementById('myGitHubButton');
const nyCountDownButton = document.getElementById('nyCountDownButton');
const simpleQuizButton = document.getElementById('simpleQuizButton');
const toDoButton = document.getElementById('toDoButton');
const gooseButton = document.getElementById('gooseButton');
const calcButton = document.getElementById('calcButton');

myGitHubButton.addEventListener("click", () => {
    window.location.assign("https://github.com/norogoth");
});

nyCountDownButton.addEventListener("click", () => {
    window.location.assign("./CountdownTimer/countdown.html");
});

simpleQuizButton.addEventListener("click", () => {
    window.location.assign("./QuizProject/quiz.html")
});

gooseButton.addEventListener("click", () => {
    window.location.assign("./Goose/index.html")
})

calcButton.addEventListener("click", () => {
    window.location.assign("./calculator/calculator.html")
})

toDoButton.addEventListener("click", () => {
    window.location.assign("./ToDoList/index.html");
});
