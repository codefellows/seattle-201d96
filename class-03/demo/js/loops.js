'use strict';

for (let i = 0; i < 2; i++) {
  // any code to run more than once
  console.log(`I have run ${i} times`);
}

let array = ['item1', 'item2'];
for (let i =0; i < array.length; i++) {
  console.log('item from array', array[i]);
}

let isReady = confirm('Are you ready');
while (!isReady) {
  alert('please confirm you are ready!');
  isReady = confirm('Are you ready');
}

let loopActive = false;
do {
  console.log('I am running in a loop');
} while (loopActive);
