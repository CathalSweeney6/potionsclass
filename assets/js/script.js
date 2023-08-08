// Question variables 

const questions = [{
    question: "Where did Snape grow-up and reside?",
    answers: [{
            text: "Hogsmeade",
            correct: false
        },
        {
            text: "Spinner's End",
            correct: true
        },
        {
            text: "Godric's Hollow",
            correct: false
        },
        {
            text: "Little Hangleton",
            correct: false
        },
    ]
}, {
    question: "In What Year Did Snape Become Head of Slytherin House?",
    answers: [{
            text: "1998",
            correct: false
        },
        {
            text: "1986",
            correct: false
        },
        {
            text: "1997",
            correct: false
        },
        {
            text: "1981",
            correct: true
        },
    ]
}, {
    question: "What Disarming Spell Did Snape Indirectly Teach Harry During Duelling Club?",
    answers: [{
            text: "Stupefy",
            correct: false
        },
        {
            text: "Expelliarmus",
            correct: true
        },
        {
            text: "Slugulus Eructo",
            correct: false
        },
        {
            text: "Protego",
            correct: false
        },
    ]
}, {
    question: "Snape Was Gifted At Which Type of Magical Practice?",
    answers: [{
            text: "Arithmancy",
            correct: false
        },
        {
            text: "Legilimency",
            correct: true
        },
        {
            text: "Occlumency",
            correct: false
        },
        {
            text: "Geomancy",
            correct: false
        },
    ]
}, {
    question: "What physical feature did Snape possess, in J.K. Rowling's original sketches of the character?",
    answers: [{
            text: "A Goatee Beard",
            correct: true
        },
        {
            text: "Large Hoop Earrings",
            correct: false
        },
        {
            text: "Shaved Eyebrows",
            correct: false
        },
        {
            text: "A Great Tan",
            correct: false
        },
    ]
}, {
    question: "At what age did snape become potions master at Hogwarts?",
    answers: [{
            text: "23",
            correct: false
        },
        {
            text: "22",
            correct: false
        },
        {
            text: "21",
            correct: true
        },
        {
            text: "20",
            correct: false
        },
    ]
}, {
    question: "What did Eileen Prince have a passion for, during her studies at Hogwarts?",
    answers: [{
            text: "Quidditch",
            correct: false
        },
        {
            text: "Wizard's Chess",
            correct: false
        },
        {
            text: "Duelling",
            correct: false
        },
        {
            text: "Gobstones",
            correct: true
        },
    ]
}, {
    question: "What did Snape Accidentally do, during 'The Battle of The Seven Potters?'",
    answers: [{
            text: "Kill Mad-Eye Moody",
            correct: false
        },
        {
            text: "Curse Remus Lupin",
            correct: false
        },
        {
            text: "Curse George Weasley's Ear Off",
            correct: true
        },
        {
            text: "Kill Hedwig",
            correct: false
        },
    ]
}, {
    question: "What spell did snape cast, to dispose of Draco Malfoy's conjured snake?",
    answers: [{
            text: "Brackium Emendo",
            correct: false
        },
        {
            text: "Vipera Evanesca",
            correct: true
        },
        {
            text: "Vulnera Sanentur",
            correct: false
        },
        {
            text: "Finite Incantatem",
            correct: false
        },
    ]
}, {
    question: "Who was originally considered for the role of Severus Snape in the 'Harry Potter' films?",
    answers: [{
            text: "Matt Berry",
            correct: false
        },
        {
            text: "Tim Roth",
            correct: true
        },
        {
            text: "Charles Dance",
            correct: false
        },
        {
            text: "Be Reyt (...Obviously)",
            correct: false
        },
    ]
}, {
    question: "What did Snape's Boggart take the form of?",
    answers: [{
            text: "James Potter",
            correct: false
        },
        {
            text: "A Badly Brewed Potion",
            correct: false
        },
        {
            text: "A Cracked Cauldron",
            correct: false
        },
        {
            text: "Lord Voldemort",
            correct: true
        },
    ]
}, {
    question: "Snape's hometown of cokeworth is situated in which region of england?",
    answers: [{
            text: "London",
            correct: false
        },
        {
            text: "The North East",
            correct: false
        },
        {
            text: "The Midlands",
            correct: true
        },
        {
            text: "The South West",
            correct: false
        },
    ]
}, {
    question: "According to J.K. Rowling, what did Snape smell like?",
    answers: [{
            text: "Cedarwood Cologne And Vanilla",
            correct: false
        },
        {
            text: "Bitterness And Old Shoes",
            correct: true
        },
        {
            text: "Loathing And Stale Farts",
            correct: false
        },
        {
            text: "Chemicals, Smoke, And Old Books",
            correct: false
        },
    ]
}, {
    question: "What was the name of Snape's father",
    answers: [{
            text: "Thomas",
            correct: false
        },
        {
            text: "Theodore",
            correct: false
        },
        {
            text: "Tobias",
            correct: true
        },
        {
            text: "Terrence",
            correct: false
        },
    ]
}, {
    question: "In the books, where does Snape die?",
    answers: [{
            text: "The Hogwarts Dungeons",
            correct: false
        },
        {
            text: "The Dark Forest",
            correct: false
        },
        {
            text: "The Boathouse",
            correct: false
        },
        {
            text: "The Shrieking Shack",
            correct: true
        },
    ]
}, {
    question: "What Creature Killed Severus Snape?",
    answers: [{
            text: "Filch's Cat, Mrs. Norris",
            correct: false
        },
        {
            text: "Neville's Toad, Trevor",
            correct: false
        },
        {
            text: "Voldemort's Snake, Nagini",
            correct: true
        },
        {
            text: "Arthur Weasley's Rubber Duck, Quackers",
            correct: false
        },
    ]
}, {
    question: "Who was the author of 'Advanced Potion Making,' a book studied by the Half-Blood Prince?",
    answers: [{
            text: "Zygmunt Budge",
            correct: false
        },
        {
            text: "Arsenius Jigger",
            correct: false
        },
        {
            text: "Gilderoy Lockhart",
            correct: false
        },
        {
            text: "Libatius Borage",
            correct: true
        },
    ]
}, {
    question: "In the films, what were Severus Snape's final words to Harry Potter?",
    answers: [{
            text: "I Am Your Father",
            correct: false
        },
        {
            text: "You Have Your Mother's Thighs",
            correct: false
        },
        {
            text: "You Have Your Mother's Eyes",
            correct: true
        },
        {
            text: "All Of My Money Goes To Deek!!",
            correct: false
        },
    ]
}, {
    question: "In the film adaptations, How many buttons, in total, were on Snape's outfit?",
    answers: [{
            text: "60",
            correct: false
        },
        {
            text: "40",
            correct: true
        },
        {
            text: "394",
            correct: false
        },
        {
            text: "50",
            correct: false
        },
    ]
}, {
    question: "How many times is snape mentioned in the 'Harry Potter' film franchise?",
    answers: [{
            text: "1846 Times",
            correct: false
        },
        {
            text: "1847 Times",
            correct: false
        },
        {
            text: "1848 Times",
            correct: false
        },
        {
            text: "1849 Times",
            correct: true
        },
    ]
}, ];

// Consts.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-button");
// Shuffles question order.
let shuffledQuestions, currentQuestionIndex;
let score = 0;
// Next button function.
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
// Next button function.
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
// Starts the quiz.
function startQuiz() {
    resetState();
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextButton.innerHTML = "NEXT >>";
    document.getElementById("highscore").style.display = 'none';
    setNextQuestion();
}
// Sets the next question.
function setNextQuestion() {
    resetState();
    localStorage.setItem("latestScore", score);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion;
    questionElement.innerHTML = currentQuestion.question;
    // Adds answer text to each new question.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-variables");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Hides the Next button at the start of each question.
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// Displays correct/incorrect answer on selection.
function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    nextButton.style.display = "block";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {}
        button.disabled = true;
    });
}
// Displays final score.
function showScore() {
    resetState();
    questionElement.innerHTML = `Ugh... You Only scored a mere ${score} / ${questions.length}!`;
    nextButton.innerHTML = "PLAY AGAIN!";
    nextButton.style.display = "block";
    document.getElementById("highscore").style.display = 'block';
    username.addEventListener('keyup', () => {
        saveYourScore.disabled = !username.value;
    });
}
// Starts the quiz. 
startQuiz();