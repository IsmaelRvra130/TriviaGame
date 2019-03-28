alert("Are you Ready??!!")

var number = 15; // variables.
var intervalId;
var correct = 0;
var incorrect = 0;

    //function for the timer start countdown.
function run() {   
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}
    //Function for seconds to count down.
function decrement() {
    number--;
    $(".timer").text(number);
    
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}
    
function stop() {
    clearInterval(intervalId);
}
// Run the clock call.
run();


//Question variables.
var question1 = "DaenerysDragon";
var question2 = "aryaStark";
var question3 = "JonSnowsWolf";
var question4 = "robBart";

//Checks weather the answers are correct or incorrect.
function check() {
    $.each($("input[name = 'question1']:checked"),function(){
        if ($(this).val() == question1) {
            correct++;
        } 
        else {
            incorrect++;
        }
    })

    $.each($("input[name = 'question2']:checked"),function(){
        if ($(this).val() == question2) {
            correct++;
        } 
        else {
            incorrect++;
        }
    })

    $.each($("input[name = 'question3']:checked"),function(){
        if ($(this).val() == question3) {
            correct++;
        } 
        else {
            incorrect++;
        }
    })

    $.each($("input[name = 'question4']:checked"),function(){
        if ($(this).val() == question4) {
            correct++;
        } 
        else {
            incorrect++;
        }
    })

    //Shows the hidden text after you completed the trivia quiz with how many correct & incorrect.
    $("#numberCorrect").text("You got " + correct + " correct.   You got " + incorrect + " incorrect");
    $("#button").click(function(){
        $(this).prop("#button", true);
        restart()
     });
     
}
    
    // Restart button, Restarts the game if player desires.
    function restart() {
        number = 15;
        intervalId;
        run();
        correct = 0;
        incorrect = 0;
        $("#numberCorrect").hide();
        location.reload();
    }
    