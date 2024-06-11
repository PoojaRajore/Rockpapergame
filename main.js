let userscore=0; 
// tempary store score
let computerscore=0;

//acess the score of users and computers
let userspara=document.querySelector(".user-score");
let compspara=document.querySelector(".com-score");

// access the message para
const message=document.querySelector(".msg")

// aceess all the three choices
let choices=document.querySelectorAll(".choice")

   //take input choice from computer
const computerchoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
};

//show this function when game was draw 
const drawGame=()=>{
    //console.log("game was draw");
    message.innerText="Game was draw! play again";
    message.style.backgroundColor="#081b31";
};

// show the score of the winner
const showWinner=(userWin,userchoice,compchoice)=>{ 
    if(userWin){
        userscore++;
        userspara.innerText=userscore;
        

        //console.log("you are win the game!!");
        message.innerText=`you win! your   ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor="green";
    }else{
        //console.log("you are lose the game......");
        computerscore++;
        compspara.innerText=computerscore;

    message.innerText=`you lose...${compchoice} beats  your ${userchoice}`;
    message.style.backgroundColor="red";
    }
};
// comapision between user and computer choices
const playgame=(userchoice)=>{
    // userchoice given by user
    console.log("user choice=",userchoice);
    // generate computers choice
    const compchoice=computerchoice();
    console.log("computer choice=",compchoice);//...................this is  my main function processing all over the game

    //put some condition which will win the game 
    if(userchoice===compchoice){
        //  this is for draw the game
        drawGame();
    }
    else{
        let userWin= true;
        if(userchoice==="rock"){
            // computer options left paper , scissors
              userWin=compchoice==="paper"? false: true;
            }else if(userchoice==="paper"){
                // compter options left rock , scissors
                userWin=compchoice==="scissors"?false:true;
            }else{
                // computer options left rock paper
                 userWin=compchoice==="rock"?false:true;
            } 
            showWinner(userWin,userchoice,compchoice); // creating a new function for which is win the game
         }
    
        };
// take input choices from users
  choices.forEach((choice)=>{
    const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playgame(userchoice);
    })
  });
