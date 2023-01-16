'use strict';

let instructor = {
  name: 'Jacob',
  age: 33,
  class: '201d96',
  likeJavaScript: true,
  teach: function() {
    console.log('Javascript is great');
  },
};

console.log(instructor);
instructor.teach();

// invoking function above their definition: function hoisting.
renderData(instructor.name);
renderData(instructor.age);
renderData(instructor.class);

// console.log(generateRandomNumber());

// grab an element using the id attribute
// let element = document.getElementById('put-things-here');
// console.log(element);

// create a new Element to render.
// let newElement = document.createElement('p');
// newElement.textContent = instructor.name;

// attaches our newElement to the currently rendered DOM
// element.appendChild(newElement);


function renderData(data) {
  let element = document.getElementById('put-things-here');
  let newElement = document.createElement('p');
  newElement.textContent = data;
  element.appendChild(newElement);
}

function generateRandomNumber() {
  return Math.round(Math.random() * 10); // number between 0 and 10, includes 0 but not 10.
}

// generate random number between 2 values?
function generateRandomNumberBetween(lower, upper) {
  let range = upper - lower;
  return (Math.round(Math.random() * range) + lower);
}

console.log(generateRandomNumberBetween(5, 20));
