const quizData = [
    {
        question: "What is 41 + 23?",
        a: "58",
        b: "81",
        c: "64",
        d: "67",
        correct: "c", 
        userChoice: "", 
        isUserCorrect: ""
    }
    ,
    {
        question: "What is 13 * 4?",
        a: "61",
        b: "42",
        c: "48",
        d: "52",
        correct: "d", 
        userChoice: "", 
        isUserCorrect: ""
    }
];

myStorage = window.localStorage;

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submitButton');
const answerChoices = document.getElementsByName('answer');
const backButton = document.getElementById("back-button");
var radios = document.getElementsByName("name");
var userChoice = "undefined";

let currentQuestion = 0;

function initQuizDate(){
    for (let i = 0; i < quizData.length; i++){
        myStorage.setItem(i, JSON.stringify(quizData[i]));
    }
    console.log(myStorage.length); //This is showing up as 3
    for (var i = 0; i < myStorage.length - 1; i ++){
        myStorage.setItem(i, JSON.stringify(quizData[i]));
        console.log(i + ": " + myStorage.getItem(i) );
    }
    for (var i = 0; i > myStorage.length - 1; i ++){
        console.log(myStorage.getItem(i));
    }
}

loadQuiz();
initQuizDate();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function setSelectedAnswer(){
    const answers = document.getElementsByName("answer");
    answers.forEach((answer) => {
        if (answer.checked){
            let userChoice = answer.id;
            quizData[currentQuestion]["userChoice"] = userChoice;
            if (userChoice == quizData[currentQuestion]["correct"]){
                quizData[currentQuestion]["isUserCorrect"] = "correct";
            }
            else {
                quizData[currentQuestion]["isUserCorrect"] = "incorrect";
            }
            console.log(quizData[currentQuestion]);
            localStorage.setItem(currentQuestion, JSON.stringify( quizData[currentQuestion]));
            console.log(JSON.parse(localStorage.getItem(currentQuestion)));
        }
    });
}

function processSelectedRadio() {
    for (var i = 0; i < radios.length - 1; i ++){
        if (radios[i].checked){
            var userChoice = radios[i].id;
            if (userChoice = quizData[currentQuestion][correct]){
                quizData[currentQuestion][correct] = false;
            }
            else {
                quizData[currentQuestion][correct] = true;
            }
        }
    }
}

submitButton.addEventListener("click", () => {
    setSelectedAnswer();
    if (quizData.length - 1 > currentQuestion){
        quizData[currentQuestion]["userChoice"]
        processSelectedRadio();
        currentQuestion++;
        loadQuiz();
    }
    else{
        window.location.assign("./results.html");
    }
});

backButton.addEventListener("click", () => {
    window.location.assign("https://norogoth.github.io/");
});