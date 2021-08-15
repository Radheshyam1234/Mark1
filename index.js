var readlineSync = require("readline-sync");

var score = 0;


var highScores = [
  {
    name: "Radheshyam",
    score: 6,
  },

  {
    name: "Rahul",
    score: 8,
  },
]


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


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 2;
    
  } else {
    console.log("wrong!!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}


function game(){
  questions.map(question=>{play(question.question,question.answer)})
}

function showScores() {
  console.log(" Your score is : ", score);

  if(score==8){
    console.log("Congrats you got the maximum !!!!!!!!")
  }

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();