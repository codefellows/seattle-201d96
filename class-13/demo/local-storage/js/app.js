'use strict';

// >>>>>> GLOBAL VARIABLES

let pokeForm = document.getElementById('pokeform');
let pokeList = document.getElementById('pokemon-list');

let state = {
  allPokemon: [],
};

// >>>>>> CONSTRUCTOR

// added a method so we can render the instances of object via 

function Pokemon(name) {
  this.name = name;
  this.render = function() {
    let listItem = document.createElement('li');
    listItem.textContent = this.name;
    pokeList.appendChild(listItem);
  }
}

// >>>>>> EVENT HANDLERS

// event handler takes in input from form
// click event handler / submit

function handleSubmit(event){
  event.preventDefault();
  let newPokemon = new Pokemon(event.target.pokemon.value)
  state.allPokemon.push(newPokemon);
  pokeForm.reset();
  newPokemon.render();

  // these lines don't work because they update what we have stored
  // let stringifiedPokemon = JSON.stringify(state.allPokemon);
  // localStorage.setItem('pokedex', stringifiedPokemon);

  localStorage.pokedex = JSON.stringify(state.allPokemon)
  console.log('My pokedex', localStorage.pokedex)
}

// >>>>>> EVENT LISTENERS

pokeForm.addEventListener('submit', handleSubmit)

// >>>>>> FUNCTIONAL LOGIC

if(localStorage.pokedex){
  let retrievedPokemon = localStorage.getItem('pokedex')
  console.log(retrievedPokemon)
  let parsedPokemon = JSON.parse(retrievedPokemon);
  console.log(parsedPokemon)

  for(let i = 0; i < parsedPokemon.length; i++){
    let newPokemon = new Pokemon(parsedPokemon[i].name);
    state.allPokemon.push(newPokemon);
    state.allPokemon[i].render();
  }
}