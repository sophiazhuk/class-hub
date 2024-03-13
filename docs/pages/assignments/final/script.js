document.addEventListener("DOMContentLoaded", function () {
  
    // Manually placed marker coordinates
    const markers = [
      { label: 'aw', top: 591.72, left: 192.942, order: 1 },
      { label: 'env', top: 503.87, left: 234.986, order: 2 },
      // { label: 'makers', top: 445.3, left: 232.27, order: 3 },
      { label: 'gallery', top: 378.91, left: 240.916, order: 3 },
      { label: 'miller', top: 315.42, left: 255.444, order: 4 },
      { label: 'library', top: 222.687, left: 229.025, order: 5 },
      { label: 'vu', top: 145.687, left: 199.025, order: 6 }
    ];

    // Add manually placed markers with 'marker.png' for specified locations
    markers.forEach(marker => {
      const markerElement = document.createElement("div");
      markerElement.className = "blue-marker";
      markerElement.style.top = marker.top + "px";
      markerElement.style.left = marker.left + "px";
      markerElement.title = marker.label;
      markerElement.setAttribute('data-order', marker.order); // Set the order attribute
      document.getElementById("map-container").appendChild(markerElement);

      // Update the marker images during initialization
      markerElement.style.backgroundImage = 'url("marker-blink.gif")';

      markerElement.addEventListener("click", function () {
        if (markerElement.style.backgroundImage.includes('marker-blink.gif')) {
          showTriviaQuestion(marker.label);
        }
      });
    });

    showInstructions();
    setTimeout(function () {
      updateMarkerImages();
      updateMarkerImage();
    }, 1000); 
  });

  function updateMarkerImages() {
    var markers = document.querySelectorAll('.blue-marker');
    markers.forEach(marker => {
      var order = parseInt(marker.getAttribute('data-order'));
      marker.style.backgroundImage = 'url("marker.png")'; // Reset other markers
    });
  }

  function updateMarkerImage() {
    var currentProgress = parseFloat(document.getElementById('progress-bar').style.width) || 0;
    var nextMarkerOrder;

    if (currentProgress > 89) {
      nextMarkerOrder = 7;
    } else if (currentProgress > 70) {
      nextMarkerOrder = 6;
    } else if (currentProgress > 56) {
      nextMarkerOrder = 5;
    } else if (currentProgress > 42) {
      nextMarkerOrder = 4;
    } else if (currentProgress > 28) {
      nextMarkerOrder = 3;
    } else if (currentProgress > 14) {
      nextMarkerOrder = 2;
    } else {
      nextMarkerOrder = 1;
    }

    // Change the background-image for the nextMarker
    var markers = document.querySelectorAll('.blue-marker');
    markers.forEach(marker => {
      var order = parseInt(marker.getAttribute('data-order'));
      if (order === nextMarkerOrder) {
        marker.style.backgroundImage = 'url("marker-blink.gif")';
      } else {
        marker.style.backgroundImage = 'url("marker.png")'; // Reset other markers
      }
    });
  }

  $(document).ready(function(){
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Add click event listener to the hint icon
    $('#hint-icon').click(function(){
      // Show hint text
      $('#hintText').fadeIn();
    });
        // Reset/hide hintText after the trivia modal is hidden
  $('#triviaModal').on('hidden.bs.modal', function () {
      $('#hintText').hide(); // or $('#hintText').fadeOut();
  });
  });
  // Trivia Modal Logic
  function showTriviaQuestion(sectionLabel) {
    var questionAndAnswers = getQuestionAndAnswersBySection(sectionLabel);

    // Display image
    var imageContainer = document.getElementById('imageContainer');

    imageContainer.innerHTML = `<img src="${sectionLabel.toLowerCase()}-q.png" alt="${sectionLabel} Image" class="img-fluid">`;


    // Display question
    document.getElementById('questionText').textContent = questionAndAnswers.question;

    // Display answer options
    var answerButtons = document.querySelectorAll('.answer-option');
    var randomizedAnswers = questionAndAnswers.answers.slice().sort(() => Math.random() - 0.5);

    answerButtons.forEach(function (button, i) {
      button.textContent = randomizedAnswers[i];
      button.classList.remove('btn-success', 'btn-danger');
      button.classList.add('btn-secondary');
      if (randomizedAnswers[i] === questionAndAnswers.correctAnswer) {
        button.dataset.correct = true;
        button.dataset.section = sectionLabel; // Store section label in the button dataset
      } else {
        button.dataset.correct = false;
      }
    });
    
    // Display hint
    var hintText = getHintBySection(sectionLabel);
    document.getElementById('hintText').textContent = hintText;

    $('#triviaModal').modal('show');

    setTimeout(function () {
      updateMarkerImage();
    }, 1000);
  }

  
  function checkAnswer(clickedButton) {
    if (clickedButton.dataset.correct === 'true') {
      clickedButton.classList.remove('btn-secondary');
      clickedButton.classList.add('btn-success');

      var sectionLabel = clickedButton.dataset.section;

      var blurredSection = document.querySelector('.blue-marker[title="' + sectionLabel + '"]');
      if (blurredSection) {
        blurredSection.style.opacity = '0';
        blurredSection.classList.add('marker-disabled'); // New class to disable click
        updateProgressBar();
        updateNextMarker(sectionLabel);
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
    }, 1000);
  }

  function updateNextMarker(sectionLabel) {
    var currentOrder = parseInt(document.querySelector('.blue-marker[title="' + sectionLabel + '"]').getAttribute('data-order'));
    var nextMarkerOrder;

    switch (currentOrder) {
      case 1:
        nextMarkerOrder = 2;
        break;
      case 2:
        nextMarkerOrder = 3;
        break;
      case 3:
        nextMarkerOrder = 4;
        break;
      case 4:
        nextMarkerOrder = 5;
        break;
      case 5:
        nextMarkerOrder = 6;
        break;
      case 6:
        nextMarkerOrder = 7;
        break;
      default:
        nextMarkerOrder = null;
        break;
    }

    if (nextMarkerOrder !== null) {
      var markers = document.querySelectorAll('.blue-marker');
      markers.forEach(marker => {
        var order = parseInt(marker.getAttribute('data-order'));
        if (order === nextMarkerOrder) {
          marker.style.backgroundImage = 'url("marker-blink.gif")';
        } else {
          marker.style.backgroundImage = 'url("marker.png")'; // Reset other markers
        }
      });
    }
  }

  function updateProgressBar() {
  var progressBar = document.getElementById('progress-bar');
  var progressPercent = document.getElementById('progress-percent');
  var markersCompleted = document.getElementById('markers-completed');

  var currentProgress = parseInt(progressBar.style.width) || 0;
  var newProgress = Math.min(currentProgress + (100 / 5.8), 100); // Increment by 1/7th of total progress

  progressBar.style.width = newProgress + '%';
  progressPercent.textContent = newProgress.toFixed(2) + '%';

  var completedMarkers = document.querySelectorAll('.blue-marker.marker-disabled').length;
  markersCompleted.textContent = completedMarkers + '/6 Points Completed';

  if (newProgress >= 100) {
      // Trigger ending sequence with a delay of 2000 milliseconds (2 seconds)
      setTimeout(function() {
          $('#triviaModal').modal('hide'); // Hide trivia modal
          $('#endingModal').modal('show'); // Show ending modal

          // Start the Confetti animation
          play(); 
      }, 2000);
  }


}




  function getQuestionAndAnswersBySection(sectionLabel) {
    switch (sectionLabel) {
      case 'aw':
        return {
          question: 'What is the official name of the 6th floor of AW?',
          answers: ['Floor 6', 'Penthouse', 'Attic', 'Custodial Floor'],
          correctAnswer: 'Penthouse'
        };
      case 'env':
        return {
          question: 'These three-toed tracks were collected from 15 million year old lake deposits in Nevada. What creature made them?',
          answers: ['Small Dinosaur', 'Shore Bird', 'Flying Reptile', 'Sloth'],
          correctAnswer: 'Shore Bird'
        };
      case 'makers':
        return {
          question: 'What is Makers Space?',
          answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
          correctAnswer: 'Answer 2'
        };
      case 'gallery':
        return {
          question: 'What is the name of the artist(s) who created this piece?',
          answers: ['Jackson Polys', 'Colectivo Los Ingtavidos', 'Scott Burton', 'Jyoti Duwadi'],
          correctAnswer: 'Colectivo Los Ingtavidos'
        };
      case 'miller':
        return {
          question: 'Which country was this porcelain piece made?',
          answers: ['Vietnam', 'Mongolia', 'Thailand', 'Japan'],
          correctAnswer: 'Vietnam'
        };
      case 'library':
        return {
          question: 'From the display case, what is the book title of the Whatcom Reads Selection for 2011?',
          answers: ['Greenwood', 'Border Songs', 'Red Paint', 'Old School'],
          correctAnswer: 'Border Songs'
        };
      case 'vu':
        return {
          question: 'What is the price of Miss Vickies Spicy Dill Pickle Chips at this vending machine?',
          answers: ['$1.75', '$2.25', '$2.00', '$2.50'],
          correctAnswer: '$1.75'
        };
      default:
        return {
          question: 'Default Question',
          answers: ['Correct', 'Option 2', 'Option 3', 'Option 4'],
          correctAnswer: 'Correct'
        };
    }
  }

  function showInstructions() {
    document.getElementById("instructions-modal").style.display = "flex";
  }

  function closeInstructions() {
    document.getElementById("instructions-modal").style.display = "none";
  }
  
  function getHintBySection(sectionLabel) {
    switch (sectionLabel) {
      case 'aw':
        return 'Hint: Look for the floor plan on the wall.';
      case 'env':
        return 'Hint: Look on the 2nd floor.';
      case 'makers':
        return 'Hint: Look in the corner of the room.';
      case 'gallery':
        return 'Hint: The art piece is located in one of the corners';
      case 'miller':
        return 'Hint: The display is near the Study Abroad department on the second floor.';
      case 'library':
        return 'Hint: Display is located near the entrance';
      case 'vu':
        return 'Hint: Vending Machine is located in the back near the restrooms.';
      default:
        return 'Default Hint';
    }
  }

  var emitterSize = 20,
  dotQuantity = 40,
  dotSizeMin = 6,
  dotSizeMax = 8,
  speed = 2.4,
  gravity = 0.7,
  explosionQuantity = 5,
  emitter = document.querySelector('#emitter'),
  explosions = [],
  currentExplosion = 0,
  container, i, move;

function createExplosion(container) {
  var tl = new TimelineMax({ paused: true }),
    dots = [],
    angle, duration, length, dot, i, size, r, g, b;
  for (i = 0; i < dotQuantity; i++) {
    dot = document.createElement('div');
    dots.push(dot);
    dot.className = 'dot';
    r = 84;
    g = 195;
    b = 107;
    TweenLite.set(dot, {
      backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
      visibility: 'hidden'
    });
    size = getRandom(dotSizeMin, dotSizeMax);
    container.appendChild(dot);
    angle = getRandom(0.65, 0.85) * Math.PI * 2; // a vector pointed up
    // get maximum distance from the center, factoring in size of dot, and then pick a random spot along that vector to plot a point
    length = Math.random() * (emitterSize / 2 - size / 2);
    duration = 3 + Math.random();
    // place the dot at a random spot within the emitter, and set its size
    TweenLite.set(dot, {
      x: Math.cos(angle) * length,
      y: Math.sin(angle) * length,
      width: size,
      height: size,
      xPercent: -50,
      yPercent: -50,
      visibility: 'hidden',
      force3D: true
    });
    tl.to(dot, duration / 2, {
      opacity: 0,
      ease: RoughEase.ease.config({
        points: 20,
        strength: 1.75,
        clamp: true
      })
    }, 0).to(dot, duration, {
      visibility: 'visible',
      rotationX: '-=' + getRandom(720, 1440),
      rotationZ: '+=' + getRandom(720, 1440),
      physics2D: {
        angle: angle * 180 / Math.PI, // translate radians to degrees
        velocity: (100 + Math.random() * 250) * speed,
        gravity: gravity * 100
      },
      ease: Power2.easeOut
    }, 0);
  }
  tl.play();
  return tl;
}
// function to randomize the position and size of the dots in the container
function getRandom(min, max) {
  return min + Math.random() * (max - min);
}
// function to randomize a direction for the explosion
function getRandomSign() {
  return (Math.random() < 0.5) ? -1 : 1;
}
// function to reset the position of a dot after the explosion
function resetDot(dot) {
  TweenLite.set(dot, {
    x: 0,
    y: 0
  });
  return dot;
}
// function to create an array of explosions, push them into an array and play them all
function createExplosions() {
  for (i = 0; i < explosionQuantity; i++) {
    explosions.push(createExplosion(container));
  }
}
createExplosions();
