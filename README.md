# React Interview Questions & Answers App
<h3>visit: https://react-questions-interview-app.netlify.app/ </h3>
<img alt="alt_text" src="./interview.gif"/>


## Description:
This project is a React-based web application that provides a list of interview questions and their corresponding answers. The application showcases the questions in an accordion-style format, allowing users to click on a question to reveal its answer. Below are the key components and features of the project:

## Components

### App.js
- The main entry point of the application.
- Manages the state for the background image and its random change functionality.
- Renders the Header component, InterviewAccord component, and a background image using an img tag.

### Header.js
- Renders the title "React Interview Questions & Answers" at the top of the application.
- Uses CSS styles for background color, padding, and border-radius to create a visually appealing title container.

### InterviewAccord.js
- Fetches the interview questions and answers from the data.js file.
- Maps through the data to create instances of the Question component for each question-answer pair.
- Renders the Question components within a container, creating an accordion-style layout.

### Question.js
- Receives props for each question-answer pair (question, answer, id).
- Utilizes React's useState hook to manage the state of the question's visibility (show/hide).
- Renders the question and a clickable icon (arrow up or down) for toggling the visibility of the answer.
- When the icon is clicked, the answer's visibility state is toggled.

## Data
The data.js file contains an array of interview questions and answers. Each item in the array has the following properties:

- id: A unique identifier for the question-answer pair.
- question: The interview question.
- answer: The corresponding answer to the question.

## Styling
- The App.css file contains styles for the background and the entire application layout.
- CSS styles are used to create a visually pleasing UI, including card-like containers for each question-answer pair.
- Background images are set using inline styles on the img tag in App.js.

## Random Background Image
- The application includes a "Change Image Background" button that allows users to change the background image randomly.
- Clicking the button triggers a function that generates a random number and fetches a background image from the Unsplash API using the `picsum.photos` service.

## Summary
The React Interview Questions & Answers application is a useful tool for candidates preparing for React developer interviews. It presents interview questions in a visually appealing and user-friendly format, allowing users to focus on the questions they are interested in. The project demonstrates the use of React components, state management, and CSS styling to create an engaging and interactive user experience.
