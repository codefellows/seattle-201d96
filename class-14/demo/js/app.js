'use strict';

const formEl = document.getElementById('pokemon-form');

// loading pokedex from localStorage, or setting an empty array.
let pokedex = null;
if (localStorage.getItem('pokemon')) {
  let stringifiedPokemon = localStorage.getItem('pokemon');
  pokedex = JSON.parse(stringifiedPokemon);
} else {
  pokedex = [];
}

function Pokemon(name, type, imageUrl) {
  this.name = name;
  this.type = type;
  this.imageUrl = imageUrl;
}
Pokemon.prototype.render = function(element) {
  // append a div to our pokedex, with image / name / type
  let imageEl = document.createElement('img');
  imageEl.src= this.imageUrl;
  let nameEl = document.createElement('p');
  nameEl.textContent = this.name;
  let typeEl = document.createElement('p');
  typeEl.textContent = this.type;

  element.appendChild(imageEl);
  element.appendChild(nameEl);
  element.appendChild(typeEl);
};

// this throws an error when no no formEl is present in the HTML
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  // grab all our values from the form inputs
  let name = event.target.pokemonName.value;
  let type = event.target.pokemonType.value;
  let imageUrl = event.target.pokemonImage.value;
  let pokemon = new Pokemon(name, type, imageUrl);
  pokedex.push(pokemon);
  // save to localStorage
  localStorage.setItem('pokemon', JSON.stringify(pokedex));
  console.log(localStorage);
});
