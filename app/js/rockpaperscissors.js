 ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;

function getPlayerMove(move) {
    move = getInput();
    //move = randomPlay();
    if (move === null || 0) {
        //getInput();
        move = randomPlay();
    } else {
        console.log('player chooses ' + move);
        playerMove = move;
        getComputerMove();
    } 
}

function getComputerMove(move) {
    move = randomPlay();
    if (move === null) {
        randomPlay();
    } else {
        console.log('computer chooses ' + move);
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

function getWinner(playerMove,computerMove) {
    if (playerMove === 'rock' && computerMove === 'scissors') {
      winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
      winner = 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
      winner = 'player';
    } else if (playerMove === computerMove) {
      winner = 'tie';
    } else {
      winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (var i=0; i<50; i++) {
        if (playerWins === 5 || computerWins === 5) {
            console.log("FINAL SCORE: Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
            break;
        } else {
            if (winner === "player") {
             playerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
        } else if (winner === "computer") {
             computerWins ++;
             console.log("Player Wins : " + playerWins + "  Computer Wins : " + computerWins);
        }
        getPlayerMove();    
        }
    }
}




