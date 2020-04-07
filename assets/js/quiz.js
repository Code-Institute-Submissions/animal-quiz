//Initial score is 0
var score = 0;
//Total amount of questions
var total = 7;
//Points received for each correct answer
var point = 1;
//Highest possible score
var highScore = total * point;

//initializes function
function init() {
  //correct answers
  sessionStorage.setItem("answer1", "d");
  sessionStorage.setItem("answer2", "c");
  sessionStorage.setItem("answer3", "c");
  sessionStorage.setItem("answer4", "a");
  sessionStorage.setItem("answer5", "d");
  sessionStorage.setItem("answer6", "d");
  sessionStorage.setItem("answer7", "b");

}

$(document).ready(function() {
  //Hides all questions when page is loaded
  $(".quizquestion").hide();
  //Hides all feedback initially
  $(".feedback").hide();
  //Shows first question
  $("#question1").show();

  //on click event for when a radio button is selected
  $("input[type=radio]").click(function() {
    //variable that determines the question the user is currently on
    var currentQuestion = $(this).parents("form:first").data("question");
    //runs the checkAnswer function to show feedback
    checkAnswer("" + currentQuestion + "")
  });

  //on click event for when a next (submit) button is clicked. It runs the recordAnswer function
  //which will increase the score by 1 if the user selected the correct answer. And it hides the
  //current question and shows the next question.
  $(".quizquestion #submit").click(function() {
    var currentQuestion = $(this).parents("form:first").data("question");
    var nextQuestion = $(this).parents("form:first").data("question") + 1;
    recordAnswer("" + currentQuestion + "")
    $(".quizquestion").hide();
    $("#question" + nextQuestion + "").fadeIn(700);
    return false;
  });
});

//calculate scores by recording each answer and adding 1 to the total score if correct
function recordAnswer(x) {
  var submittedAnswer = $("input[name=question" + x + "]:checked").val();
  if (submittedAnswer === sessionStorage.getItem("answer" + x + "")) {
    score++;
  };
  //returns total score after the last question
  if (x == total) {
    $("#results").html(`<h3>You got ${score} out of ${highScore} correct!</h3><a href="index.html">Try again!</a>`);
  };
  return false;
}

//shows feedback below radio buttons when selecting a radio button
function checkAnswer(x) {
  var checkedAnswer = $("input[name=question" + x + "]:checked").val();
  if (checkedAnswer === sessionStorage.getItem("answer" + x + "")) {
    $("#feedback" + x + "-correct").show();
  } else {
    $("#feedback" + x + "-incorrect").show();
  }
  return false;
};

//wait for page to load completely before starting init function
window.addEventListener("load", init, false);