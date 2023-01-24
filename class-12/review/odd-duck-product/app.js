'use strict';
console.log('hello');
console.log('hello');


let products = document.getElementById('products');
let imgOne = document.getElementById('productOne');
let imgTwo = document.getElementById('productTwo');
let imgThree = document.getElementById('productThree');

let resultButton = document.getElementById('viewResults');
let resultsContainer = document.getElementById('results-container');

// state variables.
let voteCount = 25;

const productArray = []; // we wont' be able to change product to something else.
const randomProductArray = [];

function Product(itemName, fileExtension = 'jpg') {
  this.itemName = itemName;
  this.itemImagePath = 'img/' + itemName + '.' + fileExtension; //img/itemName.fileExtension
  this.views = 0;
  this.clicks = 0;
}

function randomizeProduct() {
  return Math.floor(Math.random() * productArray.length); //returns a random number between 0 and length of productArray
}

function renderRandomImage() {
  while (randomProductArray.length < 6) {
    let randomProducts = randomizeProduct();
    if (!randomProductArray.includes(randomProducts)) { //if randomProductArray doesn't have a randomProduct then push a randomProduct
      randomProductArray.push(randomProducts);
    }
  }

  let randImgOne = randomProductArray.shift(); //returns random image in the array
  let randImgTwo = randomProductArray.shift();
  let randImgThree = randomProductArray.shift();

  imgOne.src = productArray[randImgOne].itemImagePath; //image one is product one above which is the empty image element. This says the source is of the random image chosen by random product array is itemImagePath
  imgTwo.src = productArray[randImgTwo].itemImagePath;
  imgThree.src = productArray[randImgThree].itemImagePath;

  imgOne.alt = productArray[randImgOne].itemName;
  imgTwo.alt = productArray[randImgTwo].itemName;
  imgThree.alt = productArray[randImgThree].itemName;

  // now that the src is updated, increase views property
  productArray[randImgOne].views++;
  productArray[randImgTwo].views++;
  productArray[randImgThree].views++;
}

// A little bit of looking ahead (persistent storage)
let retrievedProducts = localStorage.getItem('myProducts');
let parsedProducts = JSON.parse(retrievedProducts); //returns myProducts as on object called parsedProducts

if (parsedProducts) {
  // use a loop to fill the productArray.
  // productArray = parsedProducts;
  console.log('refill product Array from parsedProducts');
} else {
  let bag = new Product('bag');
  let banana = new Product('banana');
  let bathroom = new Product('bathroom');
  let boots = new Product('boots');
  let breakfast = new Product('breakfast');
  let bubblegum = new Product('bubblegum');
  let chair = new Product('chair');
  let cthulhu = new Product('cthulhu');
  let dogduck = new Product('dog-duck');
  let dragon = new Product('dragon');
  let pen = new Product('pen');
  let petsweep = new Product('pet-sweep');
  let scissors = new Product('scissors');
  let shark = new Product('shark');
  let sweep = new Product('sweep', 'png');
  let tauntaun = new Product('tauntaun');
  let unicorn = new Product('unicorn');
  let watercan = new Product('water-can');
  let wineglass = new Product('wine-glass');

  productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);
}

// create a new string, from the characters of the word with the first character capatalized.

function handleShowResults(event) { // no event is defined or used.
  console.log('voteCount', voteCount);
  console.log(event.target); // an object created exactly when the event occcurs.
  if (voteCount === 0) {
    for (let i = 0; i < productArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${productArray[i].itemName} was viewed: ${productArray[i].views} time(s) and clicked: ${productArray[i].clicks}`;
      resultsContainer.appendChild(liElem);
    }
  }
  resultButton.removeEventListener('click', handleShowResults);

  let productNames = [];
  let productViews = [];
  let productClicks = [];

  for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].itemName);
    productViews.push(productArray[i].views);
    productClicks.push(productArray[i].clicks);
  }
  console.log(productNames);

}


function handleImageClick(event) {
  // console.dir(event.target);

  let productClicked = event.target.alt;
  console.log('image clicked >>>', productClicked);

  for (let i = 0; i < productArray.length; i++) {
    if (productArray[i].itemName === productClicked) {
      productArray[i].clicks++;
    }
  }



  voteCount--;

  renderRandomImage();

  if (voteCount === 0) {
    products.removeEventListener('click', handleImageClick);

    let stringifiedProducts = JSON.stringify(productArray);

    console.log('stringified products >>>>>>', stringifiedProducts);

    localStorage.setItem('myProducts', stringifiedProducts);

    resultButton.hidden=(false);
  }
}

renderRandomImage();

products.addEventListener('click', handleImageClick);
resultButton.addEventListener('click', handleShowResults);
