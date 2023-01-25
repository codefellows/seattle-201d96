'use strict';

// retrieve goats stored in localStorage
function getGoats() {
  console.log('Getting Goats!!');
  let stringData = localStorage.getItem('goats');
  return JSON.parse(stringData);
}

// save Goats into LocalStorage
function saveGoats(state) {
  // we need 2 things for setItem - key \ stringify data
  let data = JSON.stringify(state);
  // saves "state" to localStorage
  localStorage.setItem('goats', data);
  console.log('Goats saved!', localStorage);
}

// removes all app data
function deleteGoats() {

  // removes all goat data.
  localStorage.clear();
}
