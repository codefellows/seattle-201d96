'use strict';

const goatImageEls = document.getElementById('goat-images');

// pull out current goats / getItems from localStorage

// if (localStorage.getItems('goat-data')) {
//   state = localStorage.getItem('goat-data');
// }

const goatsFromlocalStorage = getGoats();
let state = null;

if (goatsFromlocalStorage) {
  state = goatsFromlocalStorage;
} else {
  // Intialize Application State, on reload or starting a new session
  state = {
    allGoats: [],
    currentGoats: []
  };
}


function Goat(name, url) {
  this.name = name;
  this.url = `assets/${url}`;
  this.clicks = 0;
  this.views = 0;
}

state.allGoats.push(new Goat('cruisin-goat', 'cruisin-goat.jpg'));
state.allGoats.push(new Goat('float-your-goat', 'float-your-goat.jpg'));
state.allGoats.push(new Goat('goat-away', 'goat-away.jpg'));
state.allGoats.push(new Goat('goat-logo', 'goat-logo.png'));
state.allGoats.push(new Goat('goat-out-of-hand', 'goat-out-of-hand.jpg'));
state.allGoats.push(new Goat('kissing-goat', 'kissing-goat.jpg'));
state.allGoats.push(new Goat('sassy-goat', 'sassy-goat.jpg'));
state.allGoats.push(new Goat('smiling-goat', 'smiling-goat.jpg'));
state.allGoats.push(new Goat('sweater-goat', 'sweater-goat.jpg'));

function generateImageIndex() {
  return Math.floor(Math.random() * state.allGoats.length);
}
function generateUniqueRandomImage() {
  let index = generateImageIndex();
  while (state.currentGoats.includes(index)) {
    index = generateImageIndex();
  }
  return index;
}
function generateImages() {

  let index1 = generateUniqueRandomImage();
  let index2 = generateUniqueRandomImage();

  // can we generate new index values that don't match
  return [index1, index2];
}
function findHighestVotes() {
  let highestSoFar = 0;

  // searching state.allGoats

  // return the allGoats[i] with the larges .votes property.
}

function renderGoats() {

  // currently render elements
  let img1 = document.getElementById('img1');
  let img2 = document.getElementById('img2');

  let [index1, index2] = generateImages();

  while (
    index1 === index2
  ) {
    [index1, index2] = generateImages();
  }

  // we should have 3 unique values
  img1.src = state.allGoats[index1].url;
  img2.src = state.allGoats[index2].url;
  img1.name = state.allGoats[index1].name;
  img2.name = state.allGoats[index1].name;

  state.currentGoats[0] = index1;
  state.currentGoats[1] = index2;
  saveGoats(state);
  console.log(state.currentGoats, state.allGoats);
}

// render initial Goats
renderGoats();

// assign event listeners
goatImageEls.addEventListener('click', function (event) {

  // what do we need to do to track votes and save to localStorage!

  renderGoats();
});
