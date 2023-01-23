'use strict';

const goatImageEl = document.getElementById('goat-images');
const goats = ['cruisin-goat.jpg', 'float-your-goat.jpg', 'goat-away.jpg', 'goat-logo.png', 'goat-out-of-hand.jpg', 'kissing-goat.jpg', 'sassy-goat.jpg', 'smiling-goat.jpg', 'sweater-goat.jpg'];

const allGoatImages = [];

function GoatImage(name, url) {
  this.name = name;
  this.url = `assets/images/${url}`;
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
  console.log(allGoatImages);
  render();
}

for (let i = 0; i < goats.length; i++) {
  let goatImage = new GoatImage(goats[i].slice(0, goats[i].length - 4), goats[i]);
  allGoatImages.push(goatImage);
}

console.log(allGoatImages);
render();

goatImageEl.addEventListener('click', handleClick);
