const quizData = [
    {
        question: "What is dog?",
        a: "A babboon",
        b: "not a dog.",
        c: "a dog.",
        d: "a banana?!?!",
        correct: "c"
    }
    ,
    {
        question: "What is a banana?",
        a: "A babboon",
        b: "not a dog.",
        c: "a VEGETABLE?!",
        d: "a banana?!?!",
        correct: "d"
    }
];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submitButton');
const answerChoices = document.getElementsByName('answer');
const backButton = document.getElementById("back-button");

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function setSelectedAnswer(){
    for (var i = 0; i < answerChoices.length - 1; i++){
        if (answerChoices[i].checked){
            localStorage.setItem(i, answerChoices[i]);
        }
    }
}

submitButton.addEventListener("click", () => {
    setSelectedAnswer();
    if (quizData.length - 1 > currentQuestion){
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