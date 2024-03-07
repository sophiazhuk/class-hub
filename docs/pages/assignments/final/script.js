document.addEventListener("DOMContentLoaded", function () {
  // Manually placed marker coordinates
  const markers = [
    { label: 'AW', top: 591.72, left: 192.942 },
    { label: 'Env Sci', top: 503.87, left: 234.986 },
    { label: 'Makers Space', top: 445.3, left: 232.27 },
    { label: 'Western Gallery', top: 378.91, left: 240.916 },
    { label: 'Miller Hall', top: 315.42, left: 255.444 },
    { label: 'Wilson Library', top: 222.687, left: 229.025 },
    { label: 'Viking Union', top: 85.101, left: 270.409 }
  ];

  // Display user marker on the map
  const userMarker = document.createElement("div");
  userMarker.className = "user-marker";
  //userMarker.style.top = "50%"; 
  //userMarker.style.left = "50%"; 
  document.getElementById("map-container").appendChild(userMarker);

  // Add manually placed markers with 'marker.png' for specified locations
  markers.forEach(marker => {
    const markerElement = document.createElement("div");
    markerElement.className = "blue-marker";
    markerElement.style.top = marker.top + "px";
    markerElement.style.left = marker.left + "px";
    markerElement.title = marker.label;
    document.getElementById("map-container").appendChild(markerElement);

    markerElement.addEventListener("click", function () {
      showTriviaQuestion(marker.label);
    });
  });
});

// Trivia Modal Logic
function showTriviaQuestion(sectionLabel) {
  var questionAndAnswers = getQuestionAndAnswersBySection(sectionLabel);

  document.getElementById('questionText').textContent = questionAndAnswers.question;

  var answerButtons = document.querySelectorAll('.answer-option');
  var randomizedAnswers = questionAndAnswers.answers.slice().sort(() => Math.random() - 0.5);

  answerButtons.forEach(function (button, i) {
    button.textContent = randomizedAnswers[i];
    button.classList.remove('btn-success', 'btn-danger');
    button.classList.add('btn-secondary');
    if (randomizedAnswers[i] === questionAndAnswers.correctAnswer) {
      button.dataset.correct = true;
    } else {
      button.dataset.correct = false;
    }
  });

  $('#triviaModal').modal('show');
}

function checkAnswer(clickedButton) {
  if (clickedButton.dataset.correct === 'true') {
    clickedButton.classList.remove('btn-secondary');
    clickedButton.classList.add('btn-success');

    var blurredSection = document.querySelector('.blue-marker[title="' + clickedButton.dataset.section + '"]');
    if (blurredSection) {
      blurredSection.style.opacity = '0';
      updateProgressBar();
    }
  } else {
    clickedButton.classList.remove('btn-secondary');
    clickedButton.classList.add('btn-danger');

    setTimeout(function () {
      clickedButton.classList.remove('btn-danger');
      clickedButton.classList.add('btn-secondary');
    }, 1000);
  }

  setTimeout(function () {
    $('#triviaModal').modal('hide');

    var answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach(function (button) {
      button.classList.remove('btn-success', 'btn-danger');
      button.classList.add('btn-secondary');
      button.dataset.correct = '';
    });

    var allSections = document.querySelectorAll('.blue-marker');
    allSections.forEach(function (section) {
      section.style.opacity = '1';
    });
  }, 1000);
}

function updateProgressBar() {
  var progressBar = document.getElementById('progress-bar');
  var currentProgress = parseInt(progressBar.style.width) || 0;
  var newProgress = Math.min(currentProgress + 10, 100); // Increment by 10%

  progressBar.style.width = newProgress + '%';
}

function getQuestionAndAnswersBySection(sectionLabel) {
  switch (sectionLabel) {
    case 'AW':
      return {
        question: 'What is AW?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'Answer 1'
      };
    case 'Env Sci':
      return {
        question: 'What is Env Sci?',
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 'Answer 2'
      };
    // Add more cases for each section
    default:
      return {
        question: 'Default Question',
        answers: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        correctAnswer: 'Option 1'
      };
  }
}
