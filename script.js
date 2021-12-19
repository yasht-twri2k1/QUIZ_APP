const quizData = [
    {
        question:'1. How did Spider-Man get his powers?',
        a:'Military experiment gone awry',
        b:'Born with them ',
        c:'Woke up with them after a strange dream',
        d:'Bitten by a radioactive spider',
        correct:'d',

    },
    {
        question:'2. Who killed the 3rd Hokage?',
        a:'Orochimaru',
        b:'Gaara',
        c:'1st and 2nd Hokage',
        d:'Zabuza',
        correct:'a',

    },
    {
        question:'3. Why does Sasuke want to kill his brother?',
        a:'His brother is stronger than him',
        b:'Because he wants to test his abilities on his brother',
        c:'Because his brother killed the Uchiha clan except for him',
        d:'Because he destroyed leaf-village',
        correct:'c',

    },
    {
        question:'4. Who uses Rasengan?',
        a:'Naruto',
        b:'Sasuke',
        c:'Gaara',
        d:'Lee',
        correct:'a',

    },
    {
        question:'5. Who are the 3 people who could use the Sharingan?',
        a:'Jiraiya, Tsundae, and Orochimaru',
        b:'Neji, Hinata, and Kakashi',
        c:'Itachi, Sasuke, and Kakashi',
        d:'None of the above',
        correct:'c',

    },
]; 

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
 