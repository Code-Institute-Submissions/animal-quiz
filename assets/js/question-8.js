const options = Array.from(document.getElementsByClassName("option"));

let possibleMapQuestions = [];
let currentMapQuestion = {};
$(".feedback").hide();

let mapQuestions = [{
    latitude: -25.2744,
    longitude: 133.7751,
    option1: "Kangaroo rats",
    option2: "Platypuses",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Lemurs"
  },
  {
    latitude: 36.9741,
    longitude: -122.0308,
    option1: "Platypuses",
    option2: "Kangaroo rats",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Lemurs"
  },
  {
    latitude: -18.7669,
    longitude: 46.8691,
    option1: "Kangaroo rats",
    option2: "Lemurs",
    option3: "Zacatuche, or rabbit of the volcanoes",
    option4: "Platypuses"
  },
  {
    latitude: 23.6345,
    longitude: -102.5528,
    option1: "Kangaroo rats",
    option2: "Zacatuche, or rabbit of the volcanoes",
    option3: "Platypuses",
    option4: "Lemurs"
  }
];

function displayMapQuestion() {
  possibleMapQuestions = [...mapQuestions];
  console.log(possibleMapQuestions);
  getMapQuestion();
};


function getMapQuestion() {
  const mapQuestionIndex = Math.floor(Math.random() * possibleMapQuestions.length);
  currentMapQuestion = possibleMapQuestions[mapQuestionIndex];

  options.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentMapQuestion["option" + number]
  });
  initMap();
};


function initMap() {
  var location = {
    lat: currentMapQuestion["latitude"],
    lng: currentMapQuestion["longitude"],
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

displayMapQuestion();
window.addEventListener("load", displayMapQuestion, false);