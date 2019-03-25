// Show timer @ 30seconds in the div.
// Show countdown after click.
    // Show questions after click.
//lock picks to only 1 option.
//After 30 seconds show alert.
    //Reveal page with # of qustions got answered correctly and incorrectly.
//restart button.

var number = 30; // variables.
var intervalId;
/*var question1 = daenerysDragon;
var question2 = aryaStark;
var question3 = jonSnowWolf;
var question4 = robBart;
var correct = 0;*/
//alert("Are you ready?!")

    //function for the timer countdown.
function run() {   
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}

function decrement() {
    number--;
    $(".timer").text(number);
    
    if (number === 0) {
        stop();
        //alert("Time Up!");
    }
}
    
function stop() {
    clearInterval(intervalId);
}
run();
console.log("hi");

function check() {
var question1 = daenerysDragon;
var question2 = aryaStark;
var question3 = jonSnowWolf;
var question4 = robBart;
var correct = 0;
    if (question1 === daenerysDragon) {
        correct++;
    }
    if (question2 === aryaStark) {
        correct++;
    }
    if (question3 === jonSnowWolf) {
        correct++;
    }
    if (quesion4 === robBart) {
        correct++;
    }
    console.log("check");
    document.getElementById("after-submit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got" + correct + " correct.";
}