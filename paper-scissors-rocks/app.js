let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(low){
if(low == "rock") return "ROCK";
if(low == "paper")return "PAPER";
if(low == "scissors")return "SCISSORS";
}

function win(userChoice,computerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML =` ${convertToWord(userChoice)}   BEATS  ${convertToWord(computerChoice)}  . MINNIE WINS`;
document.getElementById(userChoice).classList.add('green-glow');
document.getElementById("minney").style.visibility = "visible";
setTimeout(()=>document.getElementById("minney").style.visibility = "hidden",1500);
setTimeout(()=>document.getElementById(userChoice).classList.remove('green-glow'),300);
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =` ${convertToWord(userChoice)}   LOST TO  ${convertToWord(computerChoice)}  . MICKEY WINS`;
    document.getElementById(userChoice).classList.add('red-glow');
    document.getElementById("mickey").style.visibility = "visible";
    setTimeout(()=> document.getElementById("mickey").style.visibility = "hidden",1500);
    setTimeout(()=> document.getElementById(userChoice).classList.remove('red-glow'),300);

}
 


function draw(userChoice,computerChoice){

result_p.innerHTML =` ${convertToWord(userChoice)}   MATCHES WITH  ${convertToWord(computerChoice)}  . IT'S A DRAW `;
document.getElementById(userChoice).classList.add('grey-glow');
document.getElementById("both").style.visibility = "visible";
setTimeout(()=>document.getElementById(userChoice).classList.remove('grey-glow'),300);
setTimeout(()=>document.getElementById("both").style.visibility = "hidden",1500);
}

function game(userChoice){
   const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
      win(userChoice,computerChoice);
      break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
    lose(userChoice,computerChoice);
      break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
    draw(userChoice,computerChoice);
      break;

  }
 
}



function main(){
    rock_div.addEventListener('click', function(){
        game("rock");
     })
     
     paper_div.addEventListener('click', function(){
         game("paper");
     })
     
     scissors_div.addEventListener('click', function(){
         game("scissors");
     })
}

main();