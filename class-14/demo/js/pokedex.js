'use strict';

const pokedexEl = document.getElementById('pokedex');

console.log(pokedex);
// console.log(pokedex[0]);
// console.log(pokedex[0].render);

// reinstantiate from our constructor!!
for (let i = 0; i < pokedex.length; i++) {
  let currentPokemon = pokedex[i]; // reading from pokedex array from localStorage.
  pokedex[i] = new Pokemon(
    currentPokemon.name,
    currentPokemon.type,
    currentPokemon.imageUrl
  );
  // passing an element as an argument!
  pokedex[i].render(pokedexEl);
}

console.log(pokedex);
