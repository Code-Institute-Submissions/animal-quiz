/* converts the html elements with a class name of "option" into an array
and stores them in the constant "options" so we can work with them later. */
const options = Array.from(document.getElementsByClassName("option"));

//an empty object where the randomly generated map info will be stored
let selectedMap = {};
//an empty array where all the data from mapInfo will be stored
let possibleMaps = [];

//Array with object holding all the necessary data for the question
let mapInfo = [{
    latitude: -25.2744,
    longitude: 133.7751,
    option1: "Kangaroo rats",
    option2: "Platypuses",
    option3: "Zacatuche, or the volcano rabbit",
    option4: "Lemurs",
  },
  {
    latitude: 36.9741,
    longitude: -122.0308,
    option1: "Platypuses",
    option2: "Kangaroo rats",
    option3: "Zacatuche, or the volcano rabbit",
    option4: "Lemurs",
  },
  {
    latitude: -18.7669,
    longitude: 46.8691,
    option1: "Kangaroo rats",
    option2: "Lemurs",
    option3: "Zacatuche, or the volcano rabbit",
    option4: "Platypuses",
  },
  {
    latitude: 23.6345,
    longitude: -102.5528,
    option1: "Kangaroo rats",
    option2: "Zacatuche, or the volcano rabbit",
    option3: "Platypuses",
    option4: "Lemurs",
  }
];

//Copies and stores all the data from mapInfo into an array.
function displayMap() {
  possibleMaps = [...mapInfo];
  getMapDetails();
  initMap();
};

/**
 * Gets random number between 0 and length of possibleMaps
 * which is used to get the selected map.
 */
function getMapDetails() {
  let mapInfoIndex = Math.floor(Math.random() * possibleMaps.length);
  selectedMap = possibleMaps[mapInfoIndex];

  /* Changes the text in each <li><label> of question 8 to the corresponding
  value from the selectedMap variable by grabbing the number from the data-number
  HTML attribute and putting it after the string "option" to create the key.
  For example: data-number: 1 will correspond to option1 in mapInfo. */
  options.forEach(option => {
    let number = option.dataset.number;
    option.innerText = selectedMap["option" + number]
  });

  /* Change the correct feedback depending on which map was generated.
  The animal variable is set to be equal to the
  value of "option2" in the currently generated map. Then the if
  statements check which animal that is and changes the correct feedback
  HTML accordingly. */
  let animal = selectedMap.option2;
  if (animal == "Platypuses") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/platypus.gif" alt="Platypus walking" class="img-fluid mx-auto"></p>
    <p>Platypuses are only found in Eastern Australia. Some odd but fascinating facts about them include that the males are one of the few venomous mammals and the females are one of the only mammals that lay eggs.</p>
    </div>`);
  } else if (animal == "Lemurs") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/lemur.gif" alt="Lemurs walking" class="img-fluid mx-auto"></p>
    <p>Lemurs only live in Madagascar and nearby Comoro islands. And even though there are a 105 different species of lemurs, they are considered to be the most endagered group of animals on Earth. </p>
    </div>`);
  } else if (animal == "Kangaroo rats") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/kangaroo-rat.gif" alt="Kangaroo rat hopping along" class="img-fluid mx-auto"></p>
    <p>Kangaroo rats can only be found in the arid regions of western and southwestern US. There are 22 different species of kangaroo rats, and many of them only call California home. Their ability to leap is what keeps them safe from many predators.</p>
    </div>`);
  } else if (animal == "Zacatuche, or the volcano rabbit") {
    $("#feedback8-correct").html(`<div class="text-center">
    <h4 class="correct">Correct!</h4>
    <p><img src="assets/images/gifs/zacatuche.gif" alt="Zacatuche" class="img-fluid mx-auto"></p>
    <p>The world's second-smallest rabbit, the zacatuche, can only be found in the mountains surrounding Mexico City. Their population has unfortunately dwindled down to a mere 6000 due to hunting and habitat degradation because they live so close to a metropolitan area with a population of approximately 20 million.</p>
    </div>`);
  }
};

/**
 *Google map function code initially taken from developers.google.com
 *and adapted to work with random questions being generated
 */
function initMap() {
  let location = {
    lat: selectedMap.latitude,
    lng: selectedMap.longitude,
  };
  let map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 3,
      center: location
    });
  //Marker for Location
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
};


//Runs function when page is finished loading
window.addEventListener("load", displayMap, false);