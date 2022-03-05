/* Declare query selectors */
var startButton = document.querySelector('#startBtn');
var displayTimer = document.querySelector('#timer');
var viewHighscore = document.querySelector('#highscore');
var startContainer = document.querySelector('.quizStart');
var questionsContainer = document.querySelector('#questionContainer');
var question = document.querySelector('#question');
var choices = document.querySelectorAll('.btn-text');
var gameOverContainer = document.querySelector('#quizEnd');
var formContainer = document.querySelector('#formContainer');
var gameOverHeading = document.querySelector('#quizEndHeading');
var gameOverParagraph = document.querySelector('#quizEndScore');
var gameOverInitial = document.querySelector('#initialName');
var gameOverSubmit = document.querySelector('#subBtn');
var highscoreContainer = document.querySelector('#highscoreSection');
var highscoreHeading = document.querySelector('#highscoresHeading');
var highscoreTable = document.querySelector('.highscoreList');
var highscoreReset = document.querySelector('#highscoreReset');
var highscoreClear = document.querySelector('#highscoreClear');

/*Add event listeners */
startButton.addEventListener('click', startQuiz);
gameOverSubmit.addEventListener('click', submitInitial);
highscoreReset.addEventListener('click', restart);
highscoreClear.addEventListener('click', clearHighscore);
viewHighscore.addEventListener('click', showHighScore);


var timer = 60;
var questionCounter = 0;
var highscoreCounter = 0;
var score = 0;
var currQuestion = {};
var highscoreList = {};

/* Multiple choice questions to be displayed after the user clicks the start button. */
var questions = [
    {
        question: 'How do you create a function in Javascript?',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'Which of the following is not a type of loop in Javascript?',
        choices: ['for', 'while', 'if', 'for/of'],
        answer: 'if'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
    {
        question: 'What is DOM',
        choices: ['Document Object Model', 'Dominion Object Model', 'ship loops', 'for/of'],
        answer: 'Document Object Model'
    },
    {
        question: 'How do you properly call a function?',
        choices: ['function.()', 'function{}', 'function()', 'function({})'],
        answer: 'function()'
    },
    
];

/* This function will run when the start button is clicked setting the timer to 60 seconds and will display the first question */
function startQuiz() {
    questionCounter = 0;
    score = 0;
    timer = 60;
    startContainer.classList.add('hide');
    questionsContainer.classList.remove('hide');
    viewHighscore.classList.add('hide');
    timerCountdown();
    generateQuestions();
}

/* This funtion will generate questions as they are called for */
function generateQuestions() {
    if (questionCounter === 5) {
        timer = 0;
        return gameOver();
    }
    if (questions.length > questionCounter) {
        currQuestion = questions[questionCounter];
        question.innerHTML = currQuestion.question;
        questionCounter++;
    }

    /* The questions will process 4 times changing the inner text of the answer buttons with each question */
    for (var i = 0; i < 4; i++) {
        var choicesLister = choices[i];
        choicesLister.innerHTML = currQuestion.choices[i];
    }
}

/* For loop that runs through the document query selector all of choices and adds an event listerner to each choice button */
for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', submitAnswer);
}

/* This function runs when a choice is clicked and check if the answer is correct or wrong */
function submitAnswer(e) {
    var userSubmittedAnswer = e.target.innerHTML;
    var answer = currQuestion.answer;

    if (userSubmittedAnswer === answer) {
        console.log('correct answer');
        generateQuestions();
        score++;
        window.alert('You have answered correctly!');
    } else {
        console.log('incorrect answer');
        generateQuestions();
        timer -= 5;
        window.alert('You have answered incorrectly!');
    }
}

/* This function generates the game over screen to display your score and allows user to enter their initials */
function gameOver() {
    gameOverContainer.classList.remove('hide');
    formContainer.classList.remove('hide');
    questionsContainer.classList.add('hide');
    gameOverHeading.innerHTML = "Game is over!"
    gameOverParagraph.innerHTML = "Your final score is " + score;
    if(timer === -1){

    }
}

//Function that sets item in the local storage as a string.
function submitInitial(e) {
    e.preventDefault();
    var nickname = [{
        name: gameOverInitial.value,
        score: score
    }];
    localStorage.setItem("nickName", JSON.stringify(nickname));
    highScore();
}

/* Runs the highscore function and displays the highscore page */
function showHighScore(){
    highscoreContainer.classList.remove('hide');
    gameOverContainer.classList.add('hide');
    formContainer.classList.add('hide');
    startContainer.classList.add('hide');
    viewHighscore.classList.add('hide');
}

/* Add ability to store information in local storage */
function highScore() {
    highscoreContainer.classList.remove('hide');
    gameOverContainer.classList.add('hide');
    formContainer.classList.add('hide');
    startContainer.classList.add('hide');
    viewHighscore.classList.add('hide');

    if (localStorage.getItem('nickName')) {

        var highscoreGetItem = JSON.parse(localStorage.getItem('nickName'));    

        for (var i = 0; i < highscoreGetItem.length; i++) {
            highscoreList = highscoreGetItem[highscoreCounter];
            highscoreGetItem.splice(highscoreCounter, 1);
            var highscoreName = highscoreList.name;
            var highscoreScore = highscoreList.score;
            var highscoreTitle = document.createElement('p');
            var highscorePoints = document.createElement('p');
            highscoreTitle.classList.add('#highscoreName');
            highscorePoints.classList.add('#highscoreScore');
            highscoreTitle.textContent = highscoreName;
            highscorePoints.textContent = highscoreScore;
            highscoreTable.append(highscoreTitle);
            highscoreTable.append(highscorePoints);

        }
    }
}

/* Clears the information on the local storage when the clear button is clicked */
function clearHighscore(){
    highscoreTable.innerHTML = '';
    localStorage.clear();
}

/* Allows the user to restart the quiz */
function restart() {
    highscoreContainer.classList.add('hide');
    startContainer.classList.remove('hide');
    viewHighscore.classList.remove('hide');
}

/* Timer function begins when the quiz starts and will end when the countdown reaches 0 */
function timerCountdown() {
    var gameOverCheck = gameOverContainer.classList[0];
    var timeInterval = setInterval(function () {
        timer--;
        displayTimer.textContent = 'Time left: ' + timer;
        if (timer <= 0) {
            clearInterval(timeInterval)
            console.log('It went to the countdown');
            displayTimer.textContent = 'Time left: ' + 0;
            if (gameOverCheck === 'hide') {
                gameOver();
            } else {
                console.log('Game over Screen is already active');
            }
        }
    }, 1000)
}