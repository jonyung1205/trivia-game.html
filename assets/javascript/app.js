// Variables for the quiz
var number = 60;
var correct = 0;
var incorrect = 0;
var skipped = 0;
var intervalId;

// Functioning the game
$(document).ready(function () {
  $("#questionSection").hide();
  $("#results-page").hide();
  $("#start-btn").on("click", function () {
    $("#start-page").hide();
    $("#questionSection").show();
    countdownTimer();
  });

  // Functioning countdownTimer
  function countdownTimer() {
    console.log("countdownTimer")
    intervalId = setInterval(countdown, 1000);
  }

  // Functioning countdown
  function countdown() {
    number--;
    $('#countdownTimer').html(number);
    $("#submit-btn").on("click", function () {
      console.log("clicking on a submit button")

      // $("#skipped").html(skipped);
      // console.log("skipped");
      // $("#correct").html(correct);
      // console.log("correct");
      // $("#incorrect").html(incorrect);
      // console.log("incorrect");
      // clearInterval(countdownTimer);

    });

    // Once a number hits to zero...
    if (number === 0) {
      timeUp();
      console.log("Time's up!")
      $("#results-page").show();
      console.log("results-page")
      $("#questionSection").hide();
    }
  }

  // When time is up, the results page will appear 
  function timeUp() {

    // Checking values of Radio Buttons
    var q1 = $('input:radio[name=q1]:checked').val();
    var q2 = $('input:radio[name=q2]:checked').val();
    var q3 = $('input:radio[name=q3]:checked').val();
    var q4 = $('input:radio[name=q4]:checked').val();
    var q5 = $('input:radio[name=q5]:checked').val();
    var q6 = $('input:radio[name=q6]:checked').val();
    var q7 = $('input:radio[name=q7]:checked').val();
    var q8 = $('input:radio[name=q8]:checked').val();
    var q9 = $('input:radio[name=q9]:checked').val();
    var q10 = $('input:radio[name=q10]:checked').val();

    // Else/If statements of Correct, Incorrect and Skipped 
    if (q1 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q1 == "True") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q2 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q2 == "False") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q3 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q3 == "False") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q4 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q4 === "True") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q5 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q5 === "True") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q6 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q6 === "False") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q7 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q7 === "False") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q8 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q8 === "True") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q9 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q9 === "False") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }

    if (q10 === undefined) {
      console.log("skipped");
      skipped++;
      $("#skipped").html(skipped);
    } else if (q10 === "True") {
      console.log("correct");
      correct++;
      $("#correct").html(correct);
    } else {
      console.log("incorrect");
      incorrect++;
      $("#incorrect").html(incorrect);
    }
  }
});