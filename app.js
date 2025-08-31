let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const newGameButton = document.querySelector(".new-game");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];

};

const tieGame = () => {
    
    msg.innerText = "It is a Tie. Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }

};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        tieGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userWin = compChoice ==="scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);

        });
});


newGameButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move.";
    msg.style.backgroundColor = "black";
});


function playSound() {
    const sounds = document.getElementsByClassName("clickSound");
    for (let sound of sounds) {
        sound.currentTime = 0; // rewind to start
        sound.play();
    }
}