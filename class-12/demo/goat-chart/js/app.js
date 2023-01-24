'use strict';

const canvasEl = document.getElementById('chart');
const buttonEl = document.getElementById('result-button');
const goatImageEl = document.getElementById('goat-images');
const goats = ['cruisin-goat.jpg', 'float-your-goat.jpg', 'goat-away.jpg', 'goat-logo.png', 'goat-out-of-hand.jpg', 'kissing-goat.jpg', 'sassy-goat.jpg', 'smiling-goat.jpg', 'sweater-goat.jpg'];

const allGoatImages = [];
let rounds = 5;
let chart = null;

function GoatImage(name, url) {
  this.name = name;
  this.url = `images/${url}`;
  this.clicks = 0;
  this.timesSeen = 0;
}

function getRandomGoat() {
  // return an index of a goatImage in allGoatImages
  return Math.floor(Math.random() * allGoatImages.length);
}

// render images onto our HTML
function render() {
  let img1El = document.getElementById('img1');
  let img2El = document.getElementById('img2');

  let first = getRandomGoat();
  let second = getRandomGoat();

  while (second === first) {
    second = getRandomGoat();
  }

  console.log(first, second);
  let goat1 = allGoatImages[first];
  let goat2 = allGoatImages[second];

  console.log(img1El, img2El);
  img1El.src = goat1.url;
  img2El.src = goat2.url;
  img1El.name = goat1.name;
  img2El.name = goat2.name;
  goat1.timesSeen++;
  goat2.timesSeen++;
}

// add 1 to that goats click count.
function handleClick(event) {
  console.log(event.target);
  // determine which goat was clicked.
  let goatName = event.target.name;

  // forEach method on an array, 
  allGoatImages.forEach(function (goat) {
    if (goat.name === goatName) {
      goat.clicks++;
    }
  });
  rounds--;
  if (!rounds) {
    goatImageEl.removeEventListener('click', handleClick);
    // show me the button!
    buttonEl.style.display = 'inline';
  }
  console.log(allGoatImages);
  render();
}

// does our event matter??
function handleResults(event) {

  let clickData = [];
  let viewData = [];
  let nameValues = [];

  // find the data for our chart.
  for (let i =0; i < allGoatImages.length; i++) {
    nameValues.push(allGoatImages[i].name);
    clickData.push(allGoatImages[i].clicks);
    viewData.push(allGoatImages[i].timesSeen);
  }

  // draw our chart
  chart = new Chart(canvasEl, {
    type: 'bar',
    data: {
      labels: nameValues,
      datasets: [{
        label: '# of Votes',
        data: clickData,
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewData,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function updateChart(dataSetName, data) {
  if (chart) {
    // what can we do to update an already rendered chart.
  }
}

for (let i = 0; i < goats.length; i++) {
  let goatImage = new GoatImage(goats[i].slice(0, goats[i].length - 4), goats[i]);
  allGoatImages.push(goatImage);
}

console.log(allGoatImages);
render();

goatImageEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', handleResults);
