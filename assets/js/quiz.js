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
  //Shows first question
  $("#question1").show();


  $(".quizquestion #submit").click(function() {
    var currentQuestion = $(this).parents("form:first").data("question");
    var nextQuestion = $(this).parents("form:first").data("question") + 1;
    recordAnswer("" + currentQuestion + "")
    $(".quizquestion").hide();
    $("#question" + nextQuestion + "").fadeIn(700);
    return false;
  });
});

//calculate score
function recordAnswer(x) {
  var submittedAnswer = $("input[name=question" + x + "]:checked").val();
  if (submittedAnswer === sessionStorage.getItem("answer" + x + "")) {
    score++;
  };
  if (x == total) {
    $("#results").html(`<h3>You got ${score} out of ${highScore} correct!</h3><a href="index.html">Try again!</a>`);
  };
  return false;
}
//wait for page to load completely before starting init function
window.addEventListener("load", init, false);