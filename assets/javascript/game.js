$(document).ready(function() {
//generates random number to guess
var random = Math.floor(Math.random() * 102 + 19)

//display random number
$('#scoreToMatch').text(random);

//Generates random number for each crystal
var num1 = Math.floor(Math.random() * 12 + 1)
var num2 = Math.floor(Math.random() * 12 + 1)
var num3 = Math.floor(Math.random() * 12 + 1)
var num4 = Math.floor(Math.random() * 12 + 1)

//variables to keep track of wins, losses, and total score
var playerTotal = 0;
var wins = 0;
var losses = 0;

//display wins and losses
$('#wins').text(wins);
$('#losses').text(losses);

//reset game
function reset() {
    random = Math.floor(Math.random() * 102 + 19);
    console.log(random)
    $('scoreToMatch').text(random);
    num1 = Math.floor(Math.random() * 12 +1);
    num2 = Math.floor(Math.random() * 12 +1);
    num3 = Math.floor(Math.random() * 12 +1);
    num4 = Math.floor(Math.random() * 12 +1);
    playerTotal = 0;
    $('#totalScore').text(playerTotal);
}

//display wins
function youWin() {
    alert("NICE WORK!!! YOU WON!!!");
    wins ++;
    $('#wins').text(wins);
    reset();
}

//display losses
function youLose() {
    alert("YOU LOST, TRY AGAIN!!!");
    losses ++;
    $('#losses').text(losses);
    reset();
}

//When crystals are clicked
$('.orange').on('click', function() {
    playerTotal = playerTotal + num1;
    console.log("New playerTotal = " + playerTotal);
    $('#totalScore').text(playerTotal);

    //win or lose conditional statements
    if (playerTotal == random) {
        youWin();
    }
    else if (playerTotal > random) {
        youLose();
    }
})

$('.purple').on('click', function() {
    playerTotal = playerTotal + num2;
    console.log("New playerTotal = " + playerTotal);
    $('#totalScore').text(playerTotal);

    if (playerTotal == random) {
        youWin();
    }
    else if (playerTotal > random) {
        youLose();
    }
})

$('.clear').on('click', function() {
    playerTotal = playerTotal + num3;
    console.log("New playerTotal = " + playerTotal);
    $('#totalScore').text(playerTotal);

    if (playerTotal == random) {
        youWin();
    }
    else if (playerTotal > random) {
        youLose();
    }
})

$('.green').on('click', function() {
    playerTotal = playerTotal + num4;
    console.log("New playerTotal = " + playerTotal);
    $('#totalScore').text(playerTotal);

    if (playerTotal == random) {
        youWin();
    }
    else if (playerTotal > random) {
        youLose();
    }
})

});

