'use strict';

const canvasEl = document.getElementById('myCanvas');

const x = 0;
const y = 0;
const width = 500;
const height = 300;


// assign / create a context.
const ctx = canvasEl.getContext('2d'); // this utilizes the 2d API.


// 4 arguments
// x / y - the x and y cooordinates to place an element.
// w/ h - the width and height of the rectangle.
ctx.strokeRect(0,0, 20, 20); // method for drawing outlines of rectangles;


// third party libraries that use the Canvas Element.

// data visualization with Chart.js
let barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Banana', 'Whale', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }, {
      label: '# of Views',
      data: [40, 10, 28, 5, 13, 17],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// refer to the API if you want to make changes / update your chart.
barChart.data.datasets[0].data[0] = 35;
barChart.update();

