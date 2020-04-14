// converts the html elements with a class name of option into an array
// and stores them in the constant "options" so we can work with them later.
const options = Array.from(document.getElementsByClassName("option"));

let selectedMap = {};
//an empty array where all the data from mapQuestions will be stored in
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

  options.forEach(option => {
    var number = option.dataset["number"];
    option.innerText = selectedMap["option" + number]
  });
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