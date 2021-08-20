var readlineSync = require("readline-sync");
const chalk = require('chalk');

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
  question: "1. Which is his favourite movie? ",
  answer: "welcome"
}, {
  question: "2. What would he choose between money and wealth ? ",
  answer: "money"
},
{
  question:"3. Which season his his favourite ? ",
  answer: "winter"
},
{
  question:"4. Who is his favourite actor ? ",
  answer: "Akshay Kumar"
},
{
  question: "5. In which month his birthday is ? ",
  answer: "October"
},

{
  question: "6. Which sport he likes most ? ",
  answer: "Cricket"
},

{
  question: "7. Who is his favourite cricketer ? ",
  answer: "Virat kohli"
},
{
  question: "8. Do he believe in God ? ",
  answer: "Yes"
},
{
  question: "9. Which subject is his favourite? ",
  answer: "Maths"
},
{
  question:"10. Which social media he uses most ? ",
  answer: "facebook"
},


];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

console.log(chalk.green("Welcome ")+chalk.red(userName)+ chalk.green(" DO YOU KNOW Radheshyam ? \nAnswer to some questions and know how well you know him\n---------------------------- ."))
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 

    console.log(chalk.green("right!"));
    console.log(chalk.yellow('----------------------------'))
    score = score + 2;
    
  } else {
    console.log(chalk.red("wrong!!"));
     console.log(chalk.yellow('----------------------------'))
   
  }

  console.log("current score: ", score);

 if(score==10){
   console.log(chalk.green("\n You have entered into 2nd level\n--------------------"))
 }

 else if(score==16){
   console.log(chalk.green("\n You have entered into 3rd level\n--------------------"))
 }

}


function game(){
  questions.map(question=>{play(question.question,question.answer)})
}

function showScores() {
  console.log(" Your score is : ", score);

 if(score>0 && score<=12)
 console.log(chalk.magenta("It looks like you don't know Radheshyam well"))

 else if(score>12 && score<=18)
 {
   console.log(chalk.greenBright("You know Radheshyam quite well"))
 }

  else {
    console.log(chalk.greenBright("Congrats you got the maximum !!!!!!!!"))
  }

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();