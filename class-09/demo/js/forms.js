'use strict';

// Event API - always passes and event object to it's callback function.
function sayHello(event) {
  console.log(event.target);
  console.log('hey there');
}

// sayHello(); //  this runs as soon as js is done loading

// console.log(sayHello, sayHello());

// setTimeout(sayHello, 5000);

// what is going to be clicked,  what function do we run on "click"

let inputButton = document.getElementById('add-ability');
inputButton.addEventListener('click', sayHello);
