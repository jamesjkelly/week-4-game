//put code here
console.log('yo game js file is linked'); 
jQuery(document).ready(function() {
// here are vatiable
var gemA;
var gemB;
var gemC;
var gemD;
var wins = 0;
var losses = 0;
var randomCompNum;
var playersScore;


// here are the functions
function init() {
randomCompNum = 19 + Math.floor(Math.random() * 102);
gemA = 1 + Math.floor(Math.random() * 12);
gemA = 1 + Math.floor(Math.random() * 12);
gemA = 1 + Math.floor(Math.random() * 12);
gemA = 1 + Math.floor(Math.random() * 12);
playersScore = 0;
$("#wins").html("Wins: " + wins);
$("#loss").html("Losses: " + losses);
$("#randomNumber").html(randomCompNum);
$("#userScore").html(playersScore);
}


function wonOrLost() {
if (playersScore > randomCompNum) {
losses++;
init();
}

// check if user has won
if (playersScore == randomCompNum) {
wins++;
console.log("you won");
init();
}
}


init();

// listen for clicks on any of the gems by targeting the gem class
$(".gem").on("click", function() {

var pressed = $(this).attr("value");
console.log(pressed);
 if (pressed == "gem1") {
playersScore += gemA;
} else if (pressed == "gem2") {
playersScore += gemB;
} else if (pressed == "gem3") {
playersScore += gemC;
} else if (pressed == "gem4") {
playersScore += gemD;
} else {
console.log("error");
}
$("#userScore").html(playersScore);
wonOrLost();
});
});