![Animal Quiz Image](assets/images/quiz-image-1.jpg)
# *Animal Trivia Quiz* - Milestone Project 2 for Code Institute

The Animal Trivia Quiz was created using the skills learned during the first seven modules of the Full Stack Web Development course. The goal of this project was to create a mobile-first fully responsive quiz using HTML, CSS, and Javascript.

This quiz is designed to entertain users while also teaching them some random facts about our co-inhabitants of the world. The layout of the quiz is meant to be minimalistic, making it easy to follow along and see results.

Here is a link to the repository: https://github.com/debrawolford/animal-quiz.git

Here is a link to the live preview: https://debrawolford.github.io/animal-quiz/

## UX design
[Click here](https://github.com/debrawolford/animal-quiz/tree/master/wireframes) to see all the wireframes for this project.

Below is a summary of the UX Design process.

## Features

### Existing Features

* Immediate feedback: Users get feedback letting them know whether they answered correctly as soon as they select an answer.
* Easy navigation: Navigating the quiz is very straightforward, with a "Next" button for users to select each time they have finished reading their feedback. At the end of the quiz there is a "Try again" button which will let users start the quiz over.
* Results and different responses depending on how well the user did after completing the quiz.
* All images and GIFs have an alt tag for screen readers and in case the image doesn't load properly.
* Mobile responsiveness: The website has been designed with both mobile and desktop users in mind. All of the header images disappear when viewing the website from a small screen in order to save space. The text and map become become smaller, and the entire container takes up more percentage of the screen than on a desktop.
* The external link for *animalkind* has a target="blank" attribute which will pop open a new window so users don't leave the website.
* A map on question 8 that has 4 possible locations (randomly selected each time the quiz is loaded). The code for this map can be found in the file [question-8.js](https://github.com/debrawolford/animal-quiz/blob/master/assets/js/question-8.js).



### Possible Future Features

* Required Radio Buttons: Unfortunately I was not able to resolve this issue even after testing several options in both the html and javascript files. So leaving for a later date.

* An option to share the results with friends and family via Social Media and Email

* Additional questions that are randomly selected to be a part of the quiz each time, similar to the map question, which would make the quiz more enjoyable to repeat multiple times.

## Technologies Used

* HTML: This was the language used to add all the initial content to the quiz.
* CSS: Cascading Style Sheets language used to style the quiz in conjunction with Bootstrap.
* Javascript: Javascript was used to store the score of the quiz, give feedback after each question, show the results after completing, and generate a random map for question 8.

### Tools

* [Bootstrap](https://www.getbootstrap.com/): Used for initial styling.
* [Atom](https://www.atom.io/): The code editor used for this project.
* [Git](https://git-scm.com/): Installed on Atom as a plugin to allow version control.
* [Balsamiq Mockups](https://balsamiq.com/) : Used to create the wireframes during the UX Design process.
* Chrome Developer Tools: Used to test the responsiveness of the website while developing.
* [Autoprefixer](https://autoprefixer.github.io/): Added vendor prefixes to CSS for different browsers.
* [W3C Markup Validation Jigsaw](https://jigsaw.w3.org/css-validator/): To validate the CSS code.
* [W3C Markup Validation](https://validator.w3.org/): To validate the HTML code.
* [Esprima](https://esprima.org/demo/validate.html): To validate JS code.
* [Pixabay](https://www.pixabay.com/): Downloaded all images from this library.
* [GIPHY](https://giphy.com/): Downloaded all GIFs used from this library.
* [Color Picker](https://colorsupplyyy.com/app/): The colors for the header/footer and buttons were matched together using Color Picker.
* [Github](https://www.github.com/): Used to host the repositories for this project and the live website preview.
* [Canva](https://www.canva.com/): Used to resize images and create collages.
* [Google Fonts](https://fonts.google.com/): Used to get fonts used in the quiz (Hind Siliguri).
* [Jquery](https://jquery.com/) : Used within script.js to make manipulating the DOM more straightforward.
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=en_US): Used to generate random map markers for question 8.

## Testing

Chrome Developer Tools was used throughout the duration of my project to test out how the website rendered on different viewports/devices. While writing the HTML and CSS, whenever a change was made I used the device selector and looked at each screen size to confirm that everything looked as it should. If something didn't look correct, I edited the code within Chrome Developer to see my changes as I typed them. Once the issue was resolved, I would add it to my project in Atom.

The index.html page has been viewed and tested in Chrome, Firefox and Safari browsers. Everything renders correctly on both desktop and mobile versions of each browser. At the start of the project the images weren't centering properly on mobile, but this was resolved by adding the bootstrap text-center and mx-auto classes.

During the initial project review with my mentor, the idea of adding in the random map function for question 8 was brought up. This idea was then tested initially in a separate html and js file. Once it worked properly it was added to the main quiz.

There was and still is an issue with the user not being required to select a radio button before clicking next. I tried to resolve this by adding the required attribute but that didn't work. I also tried an if...else statement which would alert the user if a radio button wasn't selected when pressing the next button. But even though the alert would pop up correctly, it would pop up as well even when a radio button was selected. I hope to return to this issue at a later date to resolve it.  

W3C Markup Validation was used to ensure that all of the HTML and CSS code hold up to industry standards:

When testing index.html: Got an error stating that "the main element must not appear as a descendant of the section element." So I moved the main tags outside of the section element. I also got an error saying that "Attribute checked not allowed on element label at this point." I must have forgotten that attribute there when testing the radio buttons so I removed it. There were also three warnings saying that "The type attribute is unnecessary for JavaScript resources." so I removed those. I then tested the html again and got the following message: "Document checking completed. No errors or warnings to show."

When testing style.css: "Congratulations! No Error Found."

[Esprima](https://esprima.org/demo/validate.html) was used to validate the Javascript code and make sure there were no syntax errors:

When testing script.js: "Code is syntactically valid."

When testing question-8.js: "Code is syntactically valid."

### User Stories Testing

## Deployment

The Animal Trivia Quiz project has been built using Atom, a desktop code editor. It has been committed to Git and Pushed to GitHub using the terminal within Atom.

### Deploying the website from GitHub

1. Logged in to Github
2. Navigated to the repository from the Github Dashboard
3. Scrolled to the *Settings* icon and then down to the *Github Pages* section
4. Under *Source*, clicked on the dropdown menu and selected *Master Branch*
5. When *Master Branch* was selected, the page needed to be refreshed
6. The link to website could then be found under the *GitHub Pages* section with the following text: "Your site is published at https://debrawolford.github.io/animal-quiz/"

### Cloning the repository

Take the following steps to clone the website:

1. Navigate to the repository from the Github Dashboard
2. Select the green button in the top right of the screen that says "Clone or download"
3. Click on the clipboard icon to the right of the URL to copy it
4. Open an Integrated Development Environment (IDE) and head over to the terminal
5. Change the directory to where you want to clone the repository to
6. Execute the following command by pasting in the URL you copied in step 3: git clone https://github.com/debrawolford/animal-quiz.git
7. Press Enter
8. The site will then be cloned

## Credits

### Content

Some questions were created using information from the book [*animalkind*](https://headlines.peta.org/animalkind-book-newkirk-stone/) by Ingrid Newkirk and Gene Stone. All other information originated from [Wikipedia](https://www.wikipedia.org/).

The Google Map API used in question 8 code was initially taken from [developers.google.com](https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=en_US) and adapted to load randomly depending on which animal was the correct answer.

The random question generator for question 8 was created with the initial help of the tutorial [*Build a Quiz App*](https://www.youtube.com/watch?v=u98ROZjBWy8) by James Q Quick on Youtube and then adapted to this project.

### Media

All of the header images above each question were taken from [Pixabay](https://pixabay.com/), a website that offers free stock images. They were then edited using [Canva](https://www.canva.com/).

All of the GIFs in the feedback and results sections have been downloaded from [GIPHY](https://giphy.com/) and resized using [EZGIF.com](https://ezgif.com/resize).

## Acknowledgements

Thanks to my mentor, Dick Vlaanderen for giving suggestions that challenged me and improved the overall project.
