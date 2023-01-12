'use strict';

// let person;

function inner(param2) {
  return param2;
}

function matrix(param) {

  return inner(param);
}

// let person = matrix('Jacob');


function sayHello(person) {
  console.log('Hey there ' + person + '!!');
}

function greet(greeting, person) {
  console.log(greeting + person);
}

sayHello('Jacob');
greet('Hey There ', "Jacob");


function normalize(value) {
  return value.toLowerCase();
}

function alertUser(message = 'No message given') {
  alert('Something happened: ' + message);
}

let normalizedValue = normalize('SOME STRING');
alertUser();
