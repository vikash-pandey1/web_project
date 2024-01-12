const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markeup Language",
        d: "Hypertext markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading style sheets",
        b: "Cascading style sheep",
        c: "Cascading style sheet",
        d: "Cascading super sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hyper text markup language",
        b: "Hyper text makup language",
        c: "HyperText transfer protocol",
        d: "Hypertext markup Language",
        ans: "ans3"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScreen",
        b: "JavaScript",
        c: "JavaScale",
        d: "januen scale",
        ans: "ans2"
    },
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll('.answert');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerText = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();
getCheckedAnser = () => {
    let ans;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            ans = curAnsElem.id;
        }
    });
    return ans;
};
const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    })
}

submit.addEventListener('click', () => {
    const checkedAnser = getCheckedAnser();
    console.log(checkedAnser);

    if (checkedAnser === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3>you scored ${score}/${quizDB.length} </h3>
        <button class = "btn" onclick = "location.reload()">
        </button>`;
        showScore.classList.remove('showArea')
    }
});
