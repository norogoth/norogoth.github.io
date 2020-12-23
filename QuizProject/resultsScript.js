const backButton = document.getElementById("back-button");

function loadQuestions() {
    var question = document.createElement("li");
    var node = document.createTextNode("Hi.");
    question.appendChild(node);
    var element = document.getElementById("qr-pairs");
    element.appendChild(question);
}

loadQuestions();

backButton.addEventListener("click", () => {
    window.location.assign("https://norogoth.github.io/");
});