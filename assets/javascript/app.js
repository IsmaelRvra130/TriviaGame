// Show timer @ 30seconds in the div.
// Show countdown after click.
    // Show questions after click.
//lock picks to only 1 option.
//After 30 seconds show alert.
    //Reveal page with # of qustions got answered correctly and incorrectly.
//restart button.

var number = 30; // variables.
var intervalId;
var correct = 0;
var incorrect = 0;

alert("Are you ready?!")

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
var question1 = "daenerysDragon";
var question2 = "aryaStark";
var question3 = "jonSnowsWolf";
var question4 = "robBart";

function radio() {
    var a = document.getElementById("inlinecheckbox1").value;
    document.getElementById("correctNumber").innerHTML = a;
}

function check() {
/*var question1 = daenerysDragon;
var question2 = aryaStark;
var question3 = jonSnowWolf;
var question4 = robBart;*/
//console.log("stop")
 correct = 0;
 incorrect = 0;
    if (question1 == "daenerysDragon") {
        correct++;
    } else  {
        incorrect++;
    }

    if (question2 == "aryaStark") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question3 == "jonSnowsWolf") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question4 == "robBart") {
        correct++;
    }
    else {
        incorrect++;
    }

    console.log("check");
    //document.getElementById("after-submit").innerHTML= "strawberry";
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct. <br> You got " + incorrect + " incorrect";
    
}

check()
console.log(correct);