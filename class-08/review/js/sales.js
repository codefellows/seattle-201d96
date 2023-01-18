'use strict';

// global variables
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let cities = []; // stores our cookie store objects
let headerEl = document.getElementById('headerrow');
let bodyEl = document.getElementById('salesdata');
let footerEl = document.getElementById('footerrow');

// constructor function
function StoreLocation(locationName, minCustomers, maxCustomers, averageCookies) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.cookieSales = [];
  this.dailySalesTotal = 0;
  cities.push(this); // save our instantiated objects to global variable.
}
// generate sales data
StoreLocation.prototype.generateSalesData = function () {
  // generate random number - how many customers for a given hour open??
  // find some number between minCustomers and maxCustomers
  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    // calculate the amount of cookies purchases for a given hour
    let cookieSales = Math.round(randomCustomersPerHour * this.averageCookies);

    // save those values somewhere?
    this.cookieSales.push(cookieSales);
    this.dailySalesTotal += cookieSales;
  }
};
// render sales data
StoreLocation.prototype.render = function() {
  // create a row for the tbody
  let row = document.createElement('tr');
  bodyEl.appendChild(row);

  // add city name to table
  let cell = document.createElement('td');
  cell.textContent = this.locationName;
  row.appendChild(cell);

  // cells??
  for (let i =0; i < this.cookieSales.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = this.cookieSales[i];
    row.appendChild(cell);
  }

  // add salesTotal to table
  cell = document.createElement('td');
  cell.textContent = this.dailySalesTotal;
  row.appendChild(cell);
};

new StoreLocation('Seattle', 23, 65, 6.3);
new StoreLocation('Tokyo', 3, 24, 1.2);
new StoreLocation('Dubai', 11, 32, 3.7);
new StoreLocation('Paris', 20, 38, 2.3);
new StoreLocation('Lima', 2, 16, 4.6);

console.log(cities);

// cities[0].generateSalesData();
// cities[0].render();
for (let city of cities) {
  city.generateSalesData(); // saves sales values to object property
  city.render();
}
renderFooter(cities);

// render Header Row values

// render Footer Row values
function renderFooter(cityArray) {
  // render "totals" cell
  let totalsEl = document.createElement('th');
  footerEl.appendChild(totalsEl);
  totalsEl.textContent = 'Totals';

  // all stores sales for a given hour

  // loop within a loop!

  // for each hour in hours
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalAtHour = 0;
    let cell = document.createElement('td');
    footerEl.appendChild(cell);
    // for each store in cities
    for (let j = 0; j < cityArray.length; j++) {
      totalAtHour += cityArray[j].cookieSales[i];
      grandTotal += cityArray[j].cookieSales[i];
    }
    cell.textContent = totalAtHour;
  }

  // grand total
  let grandTotalEl = document.createElement('td');
  footerEl.appendChild(grandTotalEl);
  grandTotalEl.textContent = grandTotal;
}
