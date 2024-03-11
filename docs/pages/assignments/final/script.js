// document.addEventListener("DOMContentLoaded", function () {
//   // Manually placed marker coordinates
//   const markers = [
//     { label: 'AW', top: 591.72, left: 192.942 },
//     { label: 'Env', top: 503.87, left: 234.986 },
//     // { label: 'Makers Space', top: 445.3, left: 232.27 },
//     { label: 'Western Gallery', top: 378.91, left: 240.916 },
//     // { label: 'Miller Hall', top: 315.42, left: 255.444 },
//     { label: 'Wilson Library', top: 222.687, left: 229.025 },
//     { label: 'Viking Union', top: 85.101, left: 270.409 }
//   ];

//   // Display user marker on the map
//   const userMarker = document.createElement("div");
//   userMarker.className = "user-marker";
//   document.getElementById("map-container").appendChild(userMarker);

//   // Add manually placed markers with 'marker.png' for specified locations
//   markers.forEach(marker => {
//     const markerElement = document.createElement("div");
//     markerElement.className = "blue-marker";
//     markerElement.style.top = marker.top + "px";
//     markerElement.style.left = marker.left + "px";
//     markerElement.title = marker.label;
//     document.getElementById("map-container").appendChild(markerElement);

//     markerElement.addEventListener("click", function () {
//       showTriviaQuestion(marker.label);
//     });
//   });

//   showInstructions();
// });

// // Trivia Modal Logic
// function showTriviaQuestion(sectionLabel) {
//   var questionAndAnswers = getQuestionAndAnswersBySection(sectionLabel);

//   // Display image
//   var imageContainer = document.getElementById('imageContainer');
//   imageContainer.innerHTML = `<img src="${sectionLabel.toLowerCase()}-q.png" alt="${sectionLabel} Image" class="img-fluid">`;

//   // Display question
//   document.getElementById('questionText').textContent = questionAndAnswers.question;

//   // Display answer options
//   var answerButtons = document.querySelectorAll('.answer-option');
//   var randomizedAnswers = questionAndAnswers.answers.slice().sort(() => Math.random() - 0.5);

//   answerButtons.forEach(function (button, i) {
//     button.textContent = randomizedAnswers[i];
//     button.classList.remove('btn-success', 'btn-danger');
//     button.classList.add('btn-secondary');
//     if (randomizedAnswers[i] === questionAndAnswers.correctAnswer) {
//       button.dataset.correct = true;
//       button.dataset.section = sectionLabel; // Store section label in the button dataset
//     } else {
//       button.dataset.correct = false;
//     }
//   });

//   $('#triviaModal').modal('show');
// }

// function checkAnswer(clickedButton) {
//   if (clickedButton.dataset.correct === 'true') {
//     clickedButton.classList.remove('btn-secondary');
//     clickedButton.classList.add('btn-success');

//     var blurredSection = document.querySelector('.blue-marker[title="' + clickedButton.dataset.section + '"]');
//     if (blurredSection) {
//       blurredSection.style.opacity = '0';
//       blurredSection.classList.add('marker-disabled'); // New class to disable click
//       updateProgressBar();
//     }
//   } else {
//     clickedButton.classList.remove('btn-secondary');
//     clickedButton.classList.add('btn-danger');

//     setTimeout(function () {
//       clickedButton.classList.remove('btn-danger');
//       clickedButton.classList.add('btn-secondary');
//     }, 1000);
//   }

//   setTimeout(function () {
//     $('#triviaModal').modal('hide');

//     var answerButtons = document.querySelectorAll('.answer-option');
//     answerButtons.forEach(function (button) {
//       button.classList.remove('btn-success', 'btn-danger');
//       button.classList.add('btn-secondary');
//       button.dataset.correct = '';
//     });
//   }, 1000);
// }


// function updateProgressBar() {
//   var progressBar = document.getElementById('progress-bar');
//   var progressPercent = document.getElementById('progress-percent');
//   var markersCompleted = document.getElementById('markers-completed');

//   var currentProgress = parseInt(progressBar.style.width) || 0;
//   var newProgress = Math.min(currentProgress + (100 / 5), 100); // Increment by 1/5th of total progress

//   progressBar.style.width = newProgress + '%';
//   progressPercent.textContent = newProgress.toFixed(2) + '%';

//   if (newProgress >= 100) {
//     triggerConfetti(); // Trigger confetti when progress reaches 100%
//   }

//   var completedMarkers = document.querySelectorAll('.blue-marker.marker-disabled').length;
//   markersCompleted.textContent = completedMarkers + '/5 Points Completed';
// }

// function getQuestionAndAnswersBySection(sectionLabel) {
//   switch (sectionLabel) {
//     case 'AW':
//       return {
//         question: 'What does AW stand for?',
//         answers: ['Academic West', 'Answer Won', 'Aye, watsup', 'Academic Will'],
//         correctAnswer: 'Academic West'
//       };
//     case 'Env':
//       return {
//         question: 'These three-toed tracks were collected from 15 million year old lake deposits in Nevada. What creature made them?',
//         answers: ['Small Dinosaur', 'Shore Bird', 'Flying Reptile', 'Sloth'],
//         correctAnswer: 'Shore Bird'
//       };
//     case 'Makers Space':
//       return {
//         question: 'What is Makers Space?',
//         answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
//         correctAnswer: 'Answer 2'
//       };
//     case 'Western Gallery':
//       return {
//         question: 'Who painted this painting?',
//         answers: ['Answer 1', 'Answer 2', 'an artist', 'Answer 4'],
//         correctAnswer: 'an artist'
//       };
//     case 'Miller Hall':
//       return {
//         question: 'What they sell at cafe',
//         answers: ['Answer 1', 'Answer 2', 'coffee', 'Answer 4'],
//         correctAnswer: 'coffee'
//       };
//     case 'Wilson Library':
//       return {
//         question: 'What food place is located in this building?',
//         answers: ['Freshens', 'Subway', 'Zoes Bagels', 'Starbucks'],
//         correctAnswer: 'Zoes Bagels'
//       };
//     case 'Viking Union':
//       return {
//         question: 'What food item is missing from this vending machine?',
//         answers: ['Doritos', 'Miss Vickies', 'Tims', 'Sun Chips'],
//         correctAnswer: 'Miss Vickies'
//       };
//     default:
//       return {
//         question: 'Default Question',
//         answers: ['Correct', 'Option 2', 'Option 3', 'Option 4'],
//         correctAnswer: 'Correct'
//       };
//   }
// }

// function showInstructions() {
//   document.getElementById("instructions-modal").style.display = "flex";
// }

// function closeInstructions() {
//   document.getElementById("instructions-modal").style.display = "none";
// }


// function triggerConfetti() {
//   var end = Date.now() + 2 * 1000; // 2 seconds
//   var colors = ['#54c36b', '#c25555', '#5267FF']; // You can customize the colors

//   (function frame() {
//     confetti({
//       particleCount: 5,
//       angle: 60,
//       spread: 55,
//       origin: { x: 0 },
//       colors: colors
//     });
//     confetti({
//       particleCount: 5,
//       angle: 120,
//       spread: 55,
//       origin: { x: 1 },
//       colors: colors
//     });

//     if (Date.now() < end) {
//       requestAnimationFrame(frame);
//     }
//   }());
// }