//Initial score is 0
var score = 0;
//Total amount of questions
var total = 8;
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
  sessionStorage.setItem("answer8", "b");
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
  $(".quizquestion .submit").click(function() {
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
  //Checks which radio button was selected
  var submittedAnswer = $("input[name=question" + x + "]:checked").val();
  //Checks whether the radio button selected matches the correct answer in sessionStorage
  if (submittedAnswer === sessionStorage.getItem("answer" + x + "")) {
    score++;
  };

  //returns total score after the last question and adds html code to give results depending on how many answers were correct
  if (x == total) {
    if (score == 8) {
      $("#results").html(`<div class="text-center"><h3>Wow! You answered everything correctly!</h3><p>You're pretty much as impressive as this bird!</p><p><img src="assets/images/gifs/smart-bird.gif" alt="Bird playing game" class="img-fluid mx-auto"></p><p><strong>There's always more to learn about our neighbors on this planet. Try reading <a href="https://headlines.peta.org/animalkind-book-newkirk-stone/">'animalkind'</a> by Ingrid Newkirk to find out more extraordinary facts about animals and how we should treat them.</strong></p><div class="button text-center"><a href="index.html"><button type="button" class="btn btn-light btn-lg">Start over!</button></a></div></div>`);
    } else if (score < 8 && score >= 5) {
      $("#results").html(`<div class="text-center"><h3>You got ${score} out of ${highScore} correct!</h3><p>You might not be as resourceful as this bunny, but you did all right!</p><p><img src="assets/images/gifs/bunny.gif" alt="Bunny" class="img-fluid mx-auto"></p><p><strong>If you want to learn more, you should try reading <a href="https://headlines.peta.org/animalkind-book-newkirk-stone/">'animalkind'</a> by Ingrid Newkirk to find out more extraordinary facts about animals and how we should treat them.</strong></p><div class="button text-center"><a href="index.html"><button type="button" class="btn btn-light btn-lg">Try again!</button></a></div></div>`);
    } else if (score < 5 && score > 0) {
      $("#results").html(`<div class="text-center"><h3>You only got ${score} out of ${highScore} correct...</h3><p>You should probably study a bit more before you try again.</p><p><img src="assets/images/gifs/dog.gif" alt="Dog jumping into bush" class="img-fluid mx-auto"></p><p><strong>If you want to learn more, you should try reading <a href="https://headlines.peta.org/animalkind-book-newkirk-stone/">'animalkind'</a> by Ingrid Newkirk to find out more extraordinary facts about animals and how we should treat them.</strong></p><div class="button text-center"><a href="index.html"><button type="button" class="btn btn-light btn-lg">Try again!</button></a></div></div>`);
    } else {
      $("#results").html(`<div class="text-center"><h3>You got everything wrong! </h3><p>You should probably study a bit more before you try again.</p><p><img src="assets/images/gifs/dog.gif" alt="Dog jumping into bush" class="img-fluid mx-auto"></p><p><strong>If you want to learn more, you should try reading <a href="https://headlines.peta.org/animalkind-book-newkirk-stone/">'animalkind'</a> by Ingrid Newkirk to find out more extraordinary facts about animals and how we should treat them.</strong></p><div class="button text-center"><a href="index.html"><button type="button" class="btn btn-light btn-lg">Try again!</button></a></div></div>`);
    };
  };
  return false;
}

//shows feedback below radio buttons when selecting a radio button
function checkAnswer(x) {
  var checkedAnswer = $("input[name=question" + x + "]:checked").val();
  //hides unordered list with options once user selects their answer.
  //This is so that the user can't change their answer after seeing feedback.
  $("#options" + x + "").hide();
  //Returns correct or incorrect feedback depending on whether the submitted answer
  //matches the correct answer stored in sessionStorage.
  if (checkedAnswer === sessionStorage.getItem("answer" + x + "")) {
    $("#feedback" + x + "-correct").show();
  } else {
    $("#feedback" + x + "-incorrect").show();
  }
  return false;
};

//Google Map function for quiz question number 8 which adds a map.
//Code adapted from developers.google.com instructions on adding a map.

function initMap() {
  var madagascar = {
    lat: -18.7669,
    lng: 46.8691
  };
  var map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 3,
      center: madagascar
    });
  //Marker for Madagascar
  var marker = new google.maps.Marker({
    position: madagascar,
    map: map
  });
}

//wait for page to load completely before starting init function
window.addEventListener("load", init, false);