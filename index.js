var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Radheshyam",
    score: 5,
  },

  {
    name: "Rahul",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: " Which is my favourite movie? ",
  answer: "welcome"
}, {
  question: " What would i choose between money and wealth ? ",
  answer: "money"
},
{
  question:" Which season is my favourite ? ",
  answer: "winter"
},
{
  question:" Who is my favourite actor ? ",
  answer: "Akshay Kumar"
},
{
  question: "In which month my birthday is ? ",
  answer: "October"
},


];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "  DO YOU KNOW Radheshyam ?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

// function game() {
//   for (var i=0; i<questions.length; i++) {
   
//     play(questions[i].question, questions[i].answer)
//   }
// }

function game(){
  questions.map(question=>{play(question.question,question.answer)})
}

function showScores() {
  console.log(" Your score is : ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();