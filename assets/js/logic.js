// Declared variables
let timer;
let timeLeft = 75;
let currentQuestion = 0;
let score = 0;

// Start quiz (this section will hide the starting screen and start the timer)

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();
    document.getElementById("time").innerHTML = timeLeft;
    timer = setInterval(countdown, 1000);
}

// Show current question 

function showQuestion() {
    let question = questions[currentQuestion].question;
    let answers = questions[currentQuestion].answers;
    document.getElementById("question-title").innerHTML = question;
    document.getElementById("choices").innerHTML = "";
    for (let letter in answers) {
        let button = document.createElement("button");
        button.innerHTML = letter + ": " + answers[letter];
        button.setAttribute("onclick", "checkAnswer('" + letter + "')");
        document.getElementById("choices").appendChild(button);
    }
}

// This section will check if answer is correct, and if so add 10 seconds, if not subtract 10.
// The function then moves to the next question.
function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        document.getElementById("feedback").innerHTML = "Correct!";
        timeLeft += 10;
    } else {

        document.getElementById("feedback").innerHTML = "Incorrect!";
        timeLeft -= 10;
    }

    document.getElementById("time").innerHTML = timeLeft;

    currentQuestion++;
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

// This function stops the timer and displays the score.
function endQuiz() {

    clearInterval(timer);
    document.getElementById("questions").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-score").innerHTML = timeLeft;
}


// This controls the countdown
function countdown() {
    timeLeft--;
    document.getElementById("time").innerHTML = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
}


