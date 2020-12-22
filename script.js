

const myGitHubButton = document.getElementById('myGitHubButton');
const nyCountDownButton = document.getElementById('nyCountDownButton');
const simpleQuizButton = document.getElementById('simpleQuizButton');

myGitHubButton.addEventListener("click", () => {
    window.location.assign("https://github.com/norogoth");
});

nyCountDownButton.addEventListener("click", () => {
    window.location.assign("./CountdownTimer/countdown.html");
});

simpleQuizButton.addEventListener("click", () => {
    window.location.assign("./QuizProject/quiz.html")
});