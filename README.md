<style>
.speech-bubble {
    position: relative;
    background: #f0f0f0;
    border-radius: .4em;
    padding: 10px;
    margin: 10px 0;
}

.speech-bubble:after {
    content: '';
    top: 50%; /* Center vertically */ 
    left: -20px; /* Position it to the left of the speech bubble */ 
    margin-top: -10px; /* Center the triangle vertically */
    margin-left: -10px;
    width: 0;
    height: 0;
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f0f0f0;
    border-width: 10px;
    pointer-events: none;
}
</style>




# Fission-for-Answers

## Table of Contents
- [Project Overview](#project-overview) 
- [Features](#features) 
- [Design](#design)
- [UX](#ux)
- [Installation](#installation) 
- [Usage](#usage) 
- [Testing and Validation](#testing-and-validation) 
- [Deployment](#deployment) 
- [Documentation](#documentation) 
- [Code Organization] 
- [JavaScript Functionality]
- [AI Tools](#ai-tools)
- [Screenshots] 
- [Contributions]
- [License] 
- [Contact]
- [Acknowledgements] 

# Project Overview

**Fission 4 Answers** is an interactive sciece quiz game, intended for players of varying knowledge with adjustable difficulties. We have provided a high score cache for players to compete with themselves or each other.

### Project Goal
The overall project goal was to create an interactive quiz website using HTML, CSS and JavaScript. While utlising tools such as AI, to enhance design and debugging, inline with the [marking crtieria](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+FSBC_H1AI+1/courseware/8765212c3d0c4f9ca95ce2e6de9ae626/5a0e79ed85344b13887067937f5d27b6/).

And here are the specifics 


# Features

## Existing Features 
- Interactive quizzes with immediate feedback. 
- 2 difficulty levels (easy and hard). 
- Progress tracking and scoring. 
- Responsive design for multiple devices. - Accessibility features - incl: 

## Future features
- Medium difficulty levels. 
- Subject specific levels.
- "Hint" feature - perhaps an image toggle.

# Design 


### Colour scheme 
The following colours were used to create a changing gradient glow effect on the hero image. 
![gradient colour scheme and hex values](/assets/images/readme/glow-colours.png)


## UX

## Planning

### User Stories 

<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to see a countdown timer for each question, so that I feel challenged to answer quickly and accurately.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>The timer should start at the beginning of each question.</li>
    <li>The timer should display the remaining time in seconds.</li>
    <li>The timer should visibly count down (e.g., decreasing numbers or a progress bar).</li>
    <li>When the timer reaches zero, the current question should automatically be marked as incorrect.</li>
    <li>If the player submits an answer before the timer ends, the countdown stops.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Design a visual timer element (e.g., a progress bar or countdown text).</li>
    <li>Implement the timer logic to start when a new question loads.</li>
    <li>Configure the timer to decrement accurately in real time.</li>
    <li>Add functionality to auto-submit the question as incorrect when the timer reaches zero.</li>
    <li>Stop the timer when the player submits an answer.</li>
    <li>Test the timer for edge cases (e.g., pausing, rapid submissions, or network delays).</li>
  </ol>
</div>

<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to see my current score after answering each question, so that I know how well I am performing.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>The score should be displayed on the screen after each question is answered.</li>
    <li>Correct answers should increase the score by a predefined amount.</li>
    <li>Bonus points (if applicable) should be calculated and added immediately after the answer is submitted.</li>
    <li>Incorrect answers should not affect the score (or may result in a predefined penalty).</li>
    <li>The displayed score should update dynamically and accurately.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Set up a score-tracking system in the backend.</li>
    <li>Create a frontend element to display the current score dynamically.</li>
    <li>Implement logic to update the score when the player answers correctly.</li>
    <li>Add bonus point calculations for quick responses, if applicable.</li>
    <li>Display the updated score immediately after each question is answered.</li>
    <li>Test the score update for correct and incorrect answers, including bonus point scenarios.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to see my current score after answering each question, so that I know how well I am performing.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>The score should be displayed on the screen after each question is answered.</li>
    <li>Correct answers should increase the score by a predefined amount.</li>
    <li>Bonus points (if applicable) should be calculated and added immediately after the answer is submitted.</li>
    <li>Incorrect answers should not affect the score (or may result in a predefined penalty).</li>
    <li>The displayed score should update dynamically and accurately.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Set up a score-tracking system in the backend.</li>
    <li>Create a frontend element to display the current score dynamically.</li>
    <li>Implement logic to update the score when the player answers correctly.</li>
    <li>Add bonus point calculations for quick responses, if applicable.</li>
    <li>Display the updated score immediately after each question is answered.</li>
    <li>Test the score update for correct and incorrect answers, including bonus point scenarios.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to see a question counter, so that I know how many questions I have completed and how many are left.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>The question counter should display the current question number and the total number of questions (e.g., "Question 3 of 10").</li>
    <li>The counter should update immediately when moving to the next question.</li>
    <li>The counter should reset to "1 of X" at the start of a new quiz.</li>
    <li>The total number of questions should remain constant throughout the quiz session.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Design a UI element for the question counter (e.g., "Question X of Y").</li>
    <li>Implement logic to track the current question number and total number of questions.</li>
    <li>Ensure the counter updates dynamically when moving to the next question.</li>
    <li>Reset the counter to "1 of X" at the start of a new quiz.</li>
    <li>Test the counter for quizzes with varying lengths and during retries.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to view the leaderboard after completing the quiz, so that I can compare my performance with others.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>The leaderboard should be displayed automatically or via a button after the quiz ends.</li>
    <li>The leaderboard should show player names (or anonymous identifiers), ranks, and scores.</li>
    <li>The player's rank and score should be highlighted or clearly marked on the leaderboard.</li>
    <li>The leaderboard should allow scrolling if there are more entries than fit on the screen.</li>
    <li>The leaderboard should update in real time with new scores.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Design the leaderboard UI to display player names, ranks, and scores.</li>
    <li>Set up the backend to store and retrieve leaderboard data.</li>
    <li>Implement functionality to update the leaderboard in real time.</li>
    <li>Highlight the current player’s score and rank on the leaderboard.</li>
    <li>Add scrolling or pagination for large datasets.</li>
    <li>Test the leaderboard for sorting accuracy, performance, and real-time updates.</li>
    <li>Ability to share their score with friends/social media.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to have the option to retry the quiz, so that I can improve my score and ranking on the leaderboard.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>A "Retry" button should be available after completing the quiz.</li>
    <li>Maybe a "start again" function.</li>
    <li>Clicking the "Retry" button should reset the quiz to the first question.</li>
    <li>The player's score, timer, and question counter should be reset when the quiz restarts.</li>
    <li>The player's previous score should still be saved and visible on the leaderboard.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Add a "Retry" button to the post-quiz screen.</li>
    <li>Implement functionality to reset the score, timer, and question counter when retrying.</li>
    <li>Ensure the retry action starts a fresh instance of the quiz.</li>
    <li>Keep the player’s previous score saved in the leaderboard.</li>
    <li>Test the retry functionality for proper reset and score preservation.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to enter my name to register my score so people know it was me who scored x amount of points.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>Name Entry Field - A text input field is provided for the player to enter their name.</li>
    <li>The player's score is recorded along with their entered name.</li>
    <li>Validation - The name field does not accept empty submissions. The name field can handle various character inputs, including letters, numbers, and special characters.</li>
    <li>A confirmation message is shown after the player registers their score.</li>
    <li>Player name and score are stored in a database or local storage for future retrieval.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Create the HTML and CSS for the name entry field and submit button.</li>
    <li>Add a text input field and a submit button to the score registration page.</li>
    <li>Write JavaScript to handle form submission, validate input, and prevent empty submissions.</li>
    <li>Integrate with a backend to store player names and scores in a database or use local storage if working on a purely front-end solution.</li>
    <li>Implement a feature to show a confirmation message once the score is successfully registered.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to earn bonus points for answering questions quickly, so that I feel rewarded for my speed and accuracy.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>Bonus points should be awarded based on the remaining time on the timer (e.g., 1 point per second left).</li>
    <li>The bonus points should be displayed on the screen immediately after answering a question.</li>
    <li>Bonus points should be added to the total score and reflected dynamically.</li>
    <li>If the timer runs out, no bonus points should be awarded.</li>
    <li>The maximum bonus points per question should not exceed a predefined limit.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Define the bonus point calculation logic (e.g., 1 point per second left).</li>
    <li>Implement the bonus point calculation in the backend.</li>
    <li>Update the score dynamically to include bonus points after each question.</li>
    <li>Display the bonus points earned for each question on the results screen.</li>
    <li>Test the bonus system for varying timer values and edge cases (e.g., zero time remaining).</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to be able to select from a number of categories depending on what questions I want to challenge myself with.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>A list of available categories is displayed to the player upon starting or during the game.</li>
    <li>Categories are clearly labeled and visually distinct.</li>
    <li>The player can scroll through or view all available categories if there are more than can fit on the screen at once.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Design a UI element to display a list of available categories.</li>
    <li>Add visual feedback for selected categories.</li>
    <li>Create a data structure to store category names and associated questions.</li>
    <li>Implement logic to load and display categories dynamically.</li>
  </ol>
</div>
<div class="speech-bubble">
  <p><strong>User Story:</strong> As a player, I want to be able to select from different difficulties, depending on how much I wish to challenge myself.</p>
  <p><strong>Acceptance Criteria:</strong></p>
  <ul>
    <li>A list of available difficulties is displayed to the player upon starting or during the game.</li>
    <li>Clearly labeled and visually distinct.</li>
  </ul>
  <p><strong>Tasks:</strong></p>
  <ol>
    <li>Design a UI element to display difficulties.</li>
    <li>Add visual feedback for selected difficulty.</li>
    <li>Create a data structure to store difficulty and associated questions.</li>
  </ol>
</div>





## Documentation 

### Code Organisation

The code in this project was organised into defined sections (including seperate files for the different languages). Files were named appropriately, consistently and (to us) obviously.



## Validation and testing 

The website is intented to be accessible to all (within reason). Therefore validation and testing of both the code and final project design was completed to ensure best practise of accessibility and user experience.

#### HTML:

W3C:

#### CSS:
W3C:

#### JavaScript: 

### Design:

#### Colour contrast:

#### Font: 


# Insallation and Prerequisites for running

* Prerequesites *

## Usage 

Fission 4 Answers is designed for recreational and educarional usage, for those who wish to test or improve their science knowledge. This is not designed to align with any curriculum. 

** Maybe include a little video/walk through tutorial if there's any time? **

# AI Tools 

AI was utilised in this project in serveral areas. 

### Debugging:

### Code Optimisation:

### Reflection on the use of AI in this project:

The use of AI has allowed this project to be created in a more timely manner. AI for **debugging** helped to identify small errors and typos which would have taken considerably longer if done by hand (or eye?).
<br>
In **code optimisation**, AI was able to suggest areas in which the code could be made shorter/more effective, and suggest alternative work-arounds for design. This was most appropriate in the CSS and HTML of the wesbite, as JavaScript information tended to be less reliable, although a useful tool nonetheless. 
<br>
Finally, AI was a useful tool in the intial planning stage, such as in the generation and optimisation of the [User Stories](#user-stories). AI was also used to suggest initial **code generation**, to give an idea of where to start - although this was not used in the final project. 

# Contribution 

Contributions and constructive feedback is always welcome! Please see the [contact](#creators-and-contactcontact) section for details. 

Please see [this documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for information on how to fork/create a seperate branch from this repository, should you wish to contribute to its development. 

# License

?? Unsure of what actually goes in here, but resources online all seem to include this section.

# Creators and Contact 

Rowan 
[GitHub:]
[Email:] (mailto:)

Geza 
[GitHub:]
[Email:] (mailto:)

Jess 
<br>
[GitHub](https://github.com/jesskins)
<br>
[Email](mailto:jess.howkins@yahoo.com)


# Credits and Acknowledgements 

### Software utilised: 
- VS Code. 
- Balsamiq. 
- Bootstrap. 
- Copilot.

#### Languages:
- CSS
- HTML5 
- JavaScript 

#### Validation Software:
[W3C HTML Validator] (https://validator.w3.org/)
[W3C CSS Validator] (https://jigsaw.w3.org/css-validator/)
[JavaScript Validator] ()

#### Accessibility Software:
- Colour contrast [WCAG] (https://accessibleweb.com/color-contrast-checker/)
- [Google Lighthouse] (https://developer.chrome.com/docs/lighthouse)


#### Misc resources accessed:
- 