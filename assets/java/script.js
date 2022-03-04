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


/* addEventListeners to the page */
startButton.addEventListener('click', startQuiz);
gameOverSubmit.addEventListener('click', submitInitial);
highscoreReset.addEventListener('click', restart);
highscoreClear.addEventListener('click', clearHighscore);
viewHighscore.addEventListener('click', showHighScore);

var timer = 60;
varquestionCounter = 0;
var highscoreCounter = 0;
var score = 0;
var currentQuestion = {};
varhighscoreList = {};

/* Begin multiple choice questions */

var questions = [
    {
        question: 'How do you create a funtion in JavaScript?',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'Which of the following is not a type of loop in JavaScript?',
        choices: ['for', 'while', 'if', 'for/of'],
        answer: 'if'
    },
    {
        question: 'A very useful too used during development and debugging for printing content to the debugger is?',
        choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log?'],
        answer: 'console.log'
    },
    {
        question: 'What is the DOM',
        choices: ['Document Object Model', 'Bootstrap Library', 'Chrome Developer Tools', "Domain Object Matrix"],
        answer: 'Document Object Model'
    },
    {
        question: 'How do you properly call a function?',
        choices: ['function.()', 'function{}', 'function()', 'functions{()}'],
        answer: 'function()'
    },
];

