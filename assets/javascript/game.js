//put code here
console.log('yo game js file is linked');
jQuery(document).ready(function() {
    // here are vars
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
        console.log('Random Computer Number:' + randomCompNum);
        gemA = 1 + Math.floor(Math.random() * 12);
        console.log('gem A:' + gemA);

        gemB = 1 + Math.floor(Math.random() * 12);
        console.log('gem B:' + gemB);

        gemC = 1 + Math.floor(Math.random() * 12);
        console.log('gem C:' + gemC);

        gemD = 1 + Math.floor(Math.random() * 12);
        console.log('gem D:' + gemD);

        playersScore = 0;
        console.log('playersScore:' + playersScore);

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
            init();
        }
    }


    init();

    // listen for clicks on any of the gems by targeting the gem class
    $(".gem").on("click", function() {

        var pressed = $(this).attr("value");
        if (pressed == "gem1") {
            playersScore += gemA;
        } else if (pressed == "gem2") {
            playersScore += gemB;
        } else if (pressed == "gem3") {
            playersScore += gemC;
        } else if (pressed == "gem4") {
            playersScore += gemD;
        }
        $("#userScore").html(playersScore);
        wonOrLost();
    });
});