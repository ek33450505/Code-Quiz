/* Declare query selectors */
var startButton = document.querySelector('#startBtn');
var displayTimer = document.querySelector('#timer');
var viewHighScore = document.querySelector('#highScore');
var startContainer = document.querySelector('.quizStart');
var questionContainer = document.querySelector('#questionContainer');
var question = document.querySelector('#question');
var choices = document.querySelectorAll('btn-text');
var gameOverContainer = document.querySelector('#quizEnd');
var formContainer = document.querySelector('#formContainer');
var gameOverHeading = document.querySelector('#quizEndHeading');
var gameOverParagraph = document.querySelector('#quizEndScore');
var gameOverInitial = document.querySelector('#initialName');
var gameOverSubmit = document.querySelector('#subBtn');
var highScoreContainer = document.querySelector('#highscoreSection')
var highscoreHeader = document.querySelector('#highscoreHeader');
var highscoreTable = document.querySelector('.highsocreList');
var highscoreReset = document.querySelector('#highscoreReset');
var highscoreClear = document.querySelector('#highscoreClear');

/* addEventListeners to the page */
startButton.addEventListener('click', startQuiz);
gameOverSubmit.addEventListener('click', submitInitial);
highscoreReset.addEventListener('click', restart);
highscoreClear.addEventListener('click', clearHighscore);
viewHighScore.addEventListener('click', showHighscore);

