const backButton = document.getElementById("back-button");
const retakeButton = document.getElementById("retake-button");
myStorage = window.localStorage;

function setQuestionAnswerPairs(){
    var isThatAll = false;
    var i = 0;
    while(myStorage.getItem(i) != null){
        let jsonString = myStorage.getItem(i);
        console.log(jsonString);
        let jsonData = JSON.parse(jsonString);

        var question = document.createElement("li");
        var questionText = document.createTextNode(jsonData.question);
        question.classList.add("question");
        question.appendChild(questionText);

        var result = document.createElement("li");
        var resultText = document.createTextNode(jsonData.isUserCorrect);
        result.classList.add("result");
        result.appendChild(resultText);

        //get the qr pairs element, add a new ul and add the lis above to it.
    var qr_pairs = document.getElementById("qr-pairs");
    var newUl = document.createElement("ul");
    newUl.classList.add("qr_pair");
    qr_pairs.appendChild(newUl);
    newUl.appendChild(question);
    newUl.appendChild(result);

        i++; 
    }

}

function loadSampleQuestions() {
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

//loadSampleQuestions();
setQuestionAnswerPairs();

backButton.addEventListener("click", () => {
    window.location.assign("https://norogoth.github.io/");
});

retakeButton.addEventListener("click", () => {
    window.location.assign("./quiz.html")
})