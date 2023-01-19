'use strict';

// defining global variables up at the top.
let formEl = document.getElementById('pokemon-form');
let abilityEl = document.getElementById('add-ability');
let abilitiesList = document.getElementById('abilities-list');
let pokedexEl = document.getElementById('pokedex');

let pokedex = [];
let abilityValues = [];

// constructors and useful
function Pokemon(name, type, abilities) {
  this.name = name;
  this.type = type;
  this.abilities = abilities;
}
Pokemon.prototype.render = function () {
  let pokemonEl = document.createElement('div');
  pokemonEl.setAttribute('class', 'pokemon');
  pokedexEl.appendChild(pokemonEl);
  let nameEl = document.createElement('h3');
  nameEl.textContent = this.name;
  pokemonEl.appendChild(nameEl);
  let typeEl = document.createElement('p');
  typeEl.textContent = this.type;
  pokemonEl.appendChild(typeEl);

  // let imgEl = document.createElement('img');
  // imgEl.setAttribute('src', this.imageURL);

  if (this.abilities.length) {
    let listEl = document.createElement('ul');
    pokemonEl.appendChild(listEl);
    for (let i = 0; i < this.abilities.length; i++) {
      let listItemEl = document.createElement('li');
      listItemEl.textContent = this.abilities[i];
      listEl.appendChild(listItemEl);
    }
  }
};

abilityEl.addEventListener('click', function (event) {
  let abilityInput = document.getElementById('ability');
  let abilityValue = abilityInput.value;
  console.log(abilityValue);

  abilitiesList.innerHTML += `<strong>${abilityValue}</strong>`;
  abilityValues.push(abilityValue);
  console.log(abilityValues);
  abilityInput.value = '';
});

formEl.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent page from refreshing and resetting all of our JS.
  let name = event.target.pokemonName.value;
  let type = event.target.type.value;
  pokedex.push(new Pokemon(name, type, abilityValues));

  formEl.reset();
  abilitiesList.innerHTML = '';

  pokedex[pokedex.length - 1].render();
});

