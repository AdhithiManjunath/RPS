let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const showWinner=(userWin)=>{
  if(userWin){
    console.log("user wins");
  }
  else{
    console.log("comp wins");
  }

}

const selectWinner=(userChoice,compChoice)=>{
  if(userChoice === compChoice){
    console.log("its a draw");
    
  }
  else{
     let userWin = false;
    if(userChoice= "rock"){
          userWin = compChoice === "paper"? false: true;
    }
    else if(userChoice= "paper"){
      userWin = compChoice === "scissor"? false: true;
}
    else{
      userWin = compChoice === "rock"? false: true;
}    
    showWinner(userWin);
    }

    
  // return userWin;  
  }



const playGame = (userChoice) =>{
    let options = ["rock","paper","scissors"];
    const compChoice = options[Math.floor(Math.random()*3)];
    console.log(`comp choice is ${compChoice}`);
    let userWin = selectWinner(userChoice,compChoice);

    
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
      const userChoice = choice.getAttribute("id");
      console.log(`user choice is ${userChoice}`);
      playGame(userChoice);
    })
})