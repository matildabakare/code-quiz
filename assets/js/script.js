var counter = 0;
var timer = 75;
var timerCountdownE1 = document.querySelector("#time-countdown");
var highScoresE1 = document.querySelector("#high-scores");
var questionE1 = document.querySelector("#question");
var questionListE1 = document.querySelector("#question-list");
var pageContentEl = document.querySelector("#page-content");
var footerContentE1 = document.querySelector("#footer-content");
var headerContentE1 = document.querySelector("#header-elements");
var startButtonE1 = document.querySelector("#start-button");
var startScreenE1 = document.querySelector("#start-screen");
var quizQuestionsE1 = document.querySelector("#quiz-questions");
var quizResultsE1 = document.querySelector("#quiz-results");
var endScreenE1 = document.querySelector(".end-screen");


startButtonE1.addEventListener("click", function(){
    startScreenE1.style.display = "none";
    quizQuestionsE1.style.display = "block";
    quizResultsE1.style.display = "block";
    // headerContentE1.style.display = "block";
    // endScreenE1.style.display = "none";
    getQuizEl();
})
//Create answer option 1
var answerOptionOneEl = document.createElement("li");
answerOptionOneEl.className = "answer-options";
questionListE1.appendChild(answerOptionOneEl);

//Create answer option 2
var answerOptionTwoEl = document.createElement("li");
answerOptionTwoEl.className = "answer-options";
questionListE1.appendChild(answerOptionTwoEl);

//Create answer option 3
var answerOptionThreeEl = document.createElement("li");
answerOptionThreeEl.className = "answer-options";
questionListE1.appendChild(answerOptionThreeEl);

//Create answer option 4
var answerOptionFourEl = document.createElement("li");
answerOptionFourEl.className = "answer-options";
questionListE1.appendChild(answerOptionFourEl);

//var tasks = [];

//The questions[] array has a length of 5 and contains the questions in the quiz stored as attributes. We will loop through the array to get the questions on the page
var questions = [
    {
        text: "Commonly used data types DO Not Include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        right: "alerts"

    },
    
    {
        text: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        right: "parenthesis"

    },

    {
        text: "Arrays in JavaScript can be used to store ______.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        right: "all of the above"

    },

    {
        text: "String values must be enclosed within ______ when being assigned to variables",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        right: "quotes"

    },

    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        right: "console.log"

    }

];


//document.addEventListener('load', function() {}) -> load function when page loads
//listens for 

startScreenE1.style.display = "block";
quizQuestionsE1.style.display = "none";
quizResultsE1.style.display = "none";
// headerContentE1.style.display = "block";
// endScreenE1.style.display = "none";

// function exampleFunction () {
//     console.log("")
// }

// Function for pulling questions
var getQuizEl = function() {
    //Start countdown
    countdown();
  
    
    //set question text
    questionE1.textContent = questions[counter].text;
    
    //Create list item
    answerOptionOneEl.textContent = questions[counter].answers[0];
    answerOptionTwoEl.textContent = questions[counter].answers[1];
    answerOptionThreeEl.textContent = questions[counter].answers[2];
    answerOptionFourEl.textContent = questions[counter].answers[3];

  

    //Call function to save the task to local storage
    //saveTasks();

    pageContentEl.addEventListener("click", selectedAnswer);

    
};

var selectedAnswer = function(event) {
     // get target element from event
     var targetEl = event.target;

    if (targetEl.textContent === questions[counter].right) {
        console.log("right");
        footerContentE1.textContent = "Correct!";
    }
    else {
        console.log("wrong");
        footerContentE1.textContent = "Wrong!";
    }

    // increase task counter for next unique id

    if (counter === 4) {
        // startScreenE1.style.display = "none";
        // quizQuestionsE1.style.display = "none";
        // quizResultsE1.style.display = "none";
        // headerContentE1.style.display = "none";
        // endScreenE1.style.display = "block";
        window.location.href("../../score.html");
        return;
    }
    counter++;

    getQuizEl();
}


// timer function
var countdown = function () {
   
    // setInterval() will call a function to be executed every 1000 milliseconds
    var timeInterval = window.setInterval(function() {
        // As long as the timer is greater than 0
        if (timer > 0) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerCountdownE1.textContent = 'Time: ' + timer;
        // Decrement `timeLeft` by 1
        timer--;
    
        } else {
        // Once timer gets to 0, stop timr aend game
        timerCountdowE1.textContent = 'Time: ' + timer;
        // Use `clearInterval() to stop the timer
        clearInterval(timeInterval);
        // Call the allDone() function
        displayMessage();
        }
    }, 1000);
      
}



