'use strict';

let value1 = 33;
let value2 = 33;
let value3 = 'jacob';

let isReady = confirm('Ready to play a game?');

// if (34 <= 33 || '1') {
//   console.log('Truthy!');
// } else {
//   console.log('Falsey');
// }

if (isReady) {
  console.log('You are ready!');
}
if (!isReady) {
  console.log('You are not ready');
}
