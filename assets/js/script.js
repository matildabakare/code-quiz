var timerCountdowE1 = document.querySelector("#time-countdown");
var highScores = document.querySelector("#high-scores");

//var taskIdCounter = 0;
//var formEl = document.querySelector("#task-form");
//var tasksToDoEl = document.querySelector("#tasks-to-do");
//var pageContentEl = document.querySelector("#page-content");
//var tasksInProgressEl = document.querySelector("#tasks-in-progress");
//var tasksCompletedEl = document.querySelector("#tasks-completed");
//var tasks = [];


//document.addEventListener('load', function() {}) -> load function when page loads

var countdown = function () {
    var timer = 75;

    // setInterval() will call a function to be executed every 1000 milliseconds
    var timeInterval = window.setInterval(function() {
        // As long as the timer is greater than 0
        if (timer > 0) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerCountdowE1.textContent = 'Time: ' + timer;
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


// function for 

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