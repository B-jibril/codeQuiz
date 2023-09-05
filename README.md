# CodeQuiz
Web API For Code Quize:
- The URL of the functional, [Deployed CodeQuiz.](https://b-jibril.github.io/codeQuiz/)
- The URL of the [GitHub Repository.](https://github.com/B-jibril/codeQuiz)


# JavaScript Fundamentals Quiz

## Overview
This project is a JavaScript fundamentals quiz designed for coding boot camp students to test their knowledge of JavaScript concepts. In this README, we'll explain how to write and run test cases to ensure the quiz application functions correctly.

## Test Scenarios
We'll use the following "GIVEN-WHEN-THEN" scenarios as a basis for writing test cases:

### 1. Starting the Quiz
- GIVEN I am taking a code quiz
- WHEN I click the start button
- THEN a timer starts and I am presented with a question as you can see the screenchoot below 


![the timer starts and it presents a question ](/assets/img/quizStarter.png)


### 2. Answering Questions
- WHEN I answer a question
- THEN I am presented with another question


### 3. Answering Incorrectly
- WHEN I answer a question incorrectly
- THEN time is subtracted from the clock by -15

![presents the answer is wrong ](/assets/img/incorrectAnswer.png)

- This is a screen shoot showing you if the answer is incorrect the time will deduct 15 seconds and the sfxWrong will play if its correct it will play sfxRight

![the code  ](/assets/img/questionClickFunction.png)



### 4. Ending the Quiz
- WHEN all questions are answered
- THEN the game is over
- It will give you your finial score and ask you to enter your initials 

![end Quiz ](/assets/img/enterInitials.png)


### 5. Saving Initials and Score
- WHEN you have entered your initials 
- THEN it will save into your localStorage 

![end Quiz ](/assets/img/localStorage.png)

### Technologies Used
- HTML
- CSS
- JavaScript

### Contributors

- `Bachir Jibril` - Lead Developer

### License
This project is licensed under the MIT License - see the LICENSE file for details.

