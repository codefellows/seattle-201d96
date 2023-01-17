'use strict';

let pokedex = [];

// old way
let pikachu = {
  name: 'pikachu',
  type: 'grass',
  abilities: ['electrocute', 'quick attack'],
  speak: function() {
    console.log(this.name);
  }
};


// new way
function Pokemon(name, type, abilities) {
  this.name = name;
  this.type = type;
  this.abilities = abilities;
}
Pokemon.prototype.speak = function () {
  console.log(this.name.toUpperCase() + '!!!!');
};

// renders all pokemon values onto our html table
Pokemon.prototype.render = function () {
  // append pokemon object into pokedex
  let tableBody = document.getElementById('pokedex');

  // tablebody needs 1 tr to be appended
  let row = document.createElement('tr');

  // tr needs 3 tds to be appended to the tr
  let cell1 = document.createElement('td');
  let cell2 = document.createElement('td');
  let cell3 = document.createElement('td');

  cell1.innerHTML = this.name;
  cell2.innerHTML = this.type;
  cell3.innerHTML = this.abilities;

  // appends all cells to the same row
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  tableBody.appendChild(row);
};

function render(pokedex) {

  let tableBody = document.getElementById('pokedex');
  for (let i = 0; i < pokedex.length; i++) {
    let pokemon = pokedex[i];
    // tablebody needs 1 tr to be appended
    let row = document.createElement('tr');

    // tr needs 3 tds to be appended to the tr
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');
    let cell3 = document.createElement('td');

    cell1.innerHTML = pokemon.name;
    cell2.innerHTML = pokemon.type;
    cell3.innerHTML = pokemon.abilities;

    // appends all cells to the same row
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

    tableBody.appendChild(row);
  }
}


pokedex.push(new Pokemon('pikachu', 'grass', ['electrocute', 'quick-attack']));
pokedex.push(new Pokemon('bulbasaur', 'grass', ['vine wipe', 'solar beam']));
pokedex.push(new Pokemon('charmander', 'fire', ['ember']));
// pokedex[0].render();
// pokedex[1].render();
// pokedex[2].render();
render(pokedex);
