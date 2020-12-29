const backButton = document.getElementById("back-button");

function getQuestionAnswerPairs(){
    var isThatAll = false;
    var i = 0;
    while(isThatAll){
        if (localStorage.getItem(i)){
            
        }
        else {
            isThatAll = true;
        }
    }
}

function loadQuestions() {
    //create question
    var question = document.createElement("li");
    var questionText = document.createTextNode("question");
    question.classList.add("question");
    question.appendChild(questionText);
    //create answer
    var result = document.createElement("li");
    var resultText = document.createTextNode("WRONG!!!!");
    result.classList.add("result");
    result.appendChild(resultText);

    //get the qr pairs element, add a new ul and add the lis above to it.
    var qr_pairs = document.getElementById("qr-pairs");
    var newUl = document.createElement("ul");
    newUl.classList.add("qr_pair");
    qr_pairs.appendChild(newUl);
    newUl.appendChild(question);
    newUl.appendChild(result);
}

loadQuestions();

backButton.addEventListener("click", () => {
    window.location.assign("https://norogoth.github.io/");
});