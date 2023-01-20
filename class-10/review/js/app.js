'use strict';

let storeFormEl = document.getElementById('newStoreForm');
let tFooter = document.getElementById('tableFoot');
// variable for hour length
// variable for store hours
let defaultHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let hourLength = hours.length;

// array for total cities
const totalCities = [];

// constructor function
function Cities(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookieSales = [];
  this.dailyTotal = 0;
  totalCities.push(this);
}
Cities.prototype.getSalesData = function () {
  for (let i = 0; i < defaultHours.length; i++) {
    let customersPerHour = Math.round((Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers));
    let cookieSales;

    console.log(`in the getsales data function: ${this.hours}`)

    if (this.hours[i] == defaultHours[i]) {
      cookieSales = Math.round(customersPerHour * this.avgCookiesSold);
    } else {
      cookieSales = 0;
    }
    this.listOfCookieSalesPerHour.push(cookieSales);

    this.dailySalesTotal += cookieSales;
  }
};
Cities.prototype.refactorHours = function () {
  for (let i = this.openHours; i < this.closedHours; i++) {
    if (i < 12) {
      this.hours.push(i + ':00am');
    }
    else if (i === 12) {
      this.hours.push(i + `:00pm`);
    }
    else if (i > 12) {
      this.hours.push((i - 12) + ':00pm');
    }
  }
  console.log(`this.hours In the refactor hours function${this.hours}`);
  return this.hours;
};
Cities.prototype.calculateCookiesForOpenHours = function () {
  this.refactorHours();

  for (let i = this.openHour; i < this.closeHour; i++) {
    let cookiesEachHour = Math.round(this.avgCookiesPerCustomer * this.generateCustomersPerHour());
    this.listOfCookieSalesPerHour.push(cookiesEachHour);
  }
  return this.cookiesPerHourArray;
};

// methods:
// purchased cookies per hour
Cities.prototype.purchasedCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = Math.round((Math.random() * (this.maxCust - this.minCust) + this.minCust));
    let cookieSales = Math.round(randomCustomersPerHour * this.avgCookie);
    this.cookieSales.push(cookieSales);
    this.dailyTotal += cookieSales;
  }
};
// render method for table row(s)
Cities.prototype.render = function () {
  //Appends to table body
  let tbody = document.getElementById('tableBody');
  let row = document.createElement('tr');
  tbody.appendChild(row);

  let cell = document.createElement('td');
  cell.textContent = this.cityname;
  row.appendChild(cell);

  for (let i = 0; i < hourLength; i++) {
    let cell = document.createElement('td');
    cell.textContent = this.cookieSales[i];
    row.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = this.dailysales;
  row.appendChild(cell);
};


function renderHeader() {
  //Appends head to table
  let thead = document.getElementById('tableHead');
  let row = document.createElement('tr');
  thead.appendChild(row);
  let cell = document.createElement('th');
  cell.textContent = '';
  thead.appendChild(cell);
  for (let i = 0; i < hourLength; i++) {
    let cell = document.createElement('th');
    cell.textContent = hours[i];
    row.appendChild(cell);
  }

  cell = document.createElement('th');
  cell.textContent = 'Total';
  thead.appendChild(cell);
}


// render
//   render table header
//   generated cookie Sales Data
//   renders store data to table (uses render method for store)
function render(arrayname) {
  for (let i = 0; i < arrayname.length; i++) {
    arrayname[i].calculateCookiesForOpenHours();
    arrayname[i].purchasedCookiesPerHour();
    arrayname[i].render();
  }
}


// event handlers!
function onSubmit(event) {
  event.preventDefault(); // prevents a page reload.
  let city = new Cities(
    event.target.storeLocation.value,
    event.target.minCustomers.value,
    event.target.maxCustomers.value,
    event.target.avgCookies.value
  );
  // city.calculateCookiesForOpenHours();
  city.purchasedCookiesPerHour();


  // gets table element that we will be adding information to
  let tableEl = document.getElementById('storeSalesData');
  // create new table row which will be inserted into the table
  let newTableRow = document.createElement('tr');
  // sets id &/o class attributes for newly created row
  newTableRow.setAttribute('id', 'idName');
  newTableRow.setAttribute('class', 'className');
  // adds newly created row to the currently existing table
  tableEl.appendChild(newTableRow);
  // creates new table header element which will display the name of the store being added to the table
  let newTableHeader = document.createElement('th');
  newTableHeader.innerText = event.target.storeLocation.value;
  // append the new table header to the row that was previously appended to the table
  newTableRow.appendChild(newTableHeader);

  // assumes the sales information is within an array
  for (let i = 0; i < city.cookieSales.length; i++) {
    // get each hourly cookies sold and add to the table
    let newTableData = document.createElement('td');
    newTableData.innerText = city.cookieSales[i]/* wherever the location of the cookies sold */;
    newTableRow.appendChild(newTableData);
  }
  // update the footer row with the new totals
  storeFormEl.reset();
}
storeFormEl.addEventListener('submit', onSubmit);

// render footer row
function renderTableFooter(storeGroupArray) {
  let elementTotal = document.createElement('th');
  tFooter.appendChild(elementTotal);
  elementTotal.textContent = 'Cookie Totals';
  let finalTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalAtHour = 0;
    let cell = document.createElement('td');
    tFooter.appendChild(cell);
    for (let j = 0; j < storeGroupArray.length; j++) {
      totalAtHour += storeGroupArray[j].cookieSales[i];
      finalTotal += storeGroupArray[j].cookieSales[i];
    }
    console.log(storeGroupArray);
    cell.textContent = totalAtHour;
  }

  elementTotal = document.createElement('th');
  elementTotal.textContent = finalTotal;
  tFooter.appendChild(elementTotal);
}

renderHeader();
new Cities('Seattle', 12, 23, 6);
new Cities('Tokyo', 3, 6, 5);
new Cities('Lima', 4, 30, 8);
new Cities('New York', 10, 18, 4);
new Cities('Dubai', 14, 50, 3);
render(totalCities);
renderTableFooter(totalCities);
