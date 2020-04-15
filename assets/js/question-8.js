// converts the html elements with a class name of option into an array
// and stores them in the constant "options" so we can work with them later.
const options = Array.from(document.getElementsByClassName("option"));

//an empty object where the randomly generated map info will be stored
let selectedMap = {};
//an empty array where all the data from mapInfo will be stored
let possibleMaps = [];

let mapInfo = [{
    latitude: -25.2744,
    longitude: 133.7751,
    option1: "Kangaroo rats",
    option2: "Platypuses",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Lemurs",
  },
  {
    latitude: 36.9741,
    longitude: -122.0308,
    option1: "Platypuses",
    option2: "Kangaroo rats",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Lemurs",
  },
  {
    latitude: -18.7669,
    longitude: 46.8691,
    option1: "Kangaroo rats",
    option2: "Lemurs",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Platypuses",
  },
  {
    latitude: 23.6345,
    longitude: -102.5528,
    option1: "Kangaroo rats",
    option2: "Zacatuche, or rabbit of the volcanoes",
    option3: "Platypuses",
    option4: "Lemurs",
  }
];


function displayMap() {
  //copies and stores all the data from mapQuestions into a variable
  possibleMaps = [...mapInfo];
  getMapDetails();
};


function getMapDetails() {
  /* Gets random number between 0 and length of possibleMaps
  which will be used to assign the random map each time */
  var mapInfoIndex = Math.floor(Math.random() * possibleMaps.length);
  selectedMap = possibleMaps[mapInfoIndex];

  /* Changes the text in each <li><label> of question 8 to the corresponding
  value from the selectedMap variable by grabbing the number from the data-number
  HTML attribute and putting it after the string "option" to create the key.
  For example: data-number: 1 will correspond to option1 in mapInfo. */
  options.forEach(option => {
    var number = option.dataset["number"];
    option.innerText = selectedMap["option" + number]
  });

  /* An if else statement which will change the correct feedback
  depending on which map was generated. As option2 is always the
  correct answer, the animal variable is set to be equal to the
  value of "option2" in the currently generated map. Then the if
  statements check which animal that is and produce the correct feedback
  accordingly. */
  let animal = selectedMap["option2"];
  if (animal == "Platypuses") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/platypus.gif" alt="Platypus walking" class="img-fluid mx-auto"></p>
    <p>Mother hens are amazing moms even before their babies hatch. They talk to their egg and listen as their chick peeps back at them from inside.</p>
    </div>`);
  } else if (animal == "Lemurs") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/lemur.gif" alt="Lemurs walking" class="img-fluid mx-auto"></p>
    <p>Mother hens are amazing moms even before their babies hatch. They talk to their egg and listen as their chick peeps back at them from inside.</p>
    </div>`);
  } else if (animal == "Kangaroo rats") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/kangaroo-rat.gif" alt="Kangaroo rat hopping along" class="img-fluid mx-auto"></p>
    <p>Mother hens are amazing moms even before their babies hatch. They talk to their egg and listen as their chick peeps back at them from inside.</p>
    </div>`);
  } else if (animal == "Zacatuche, or rabbit of the volcanoes") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/zacatuche.gif" alt="Zacatuche" class="img-fluid mx-auto"></p>
    <p>Mother hens are amazing moms even before their babies hatch. They talk to their egg and listen as their chick peeps back at them from inside.</p>
    </div>`);
  }
  initMap();

};

/* Google map function code initially taken from developers.google.com
and adapted to work with random questions being generated */

function initMap() {
  var location = {
    lat: selectedMap["latitude"],
    lng: selectedMap["longitude"],
  };
  var map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 3,
      center: location
    });
  //Marker for Location
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
};


//Runs function when page is done loading

displayMap();
window.addEventListener("load", displayMap, false);