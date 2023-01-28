'use strict';

const productImageEls = document.getElementById('product-images');

const allProducts = [];
const currentProducts = [];

function Product(name, url) {
  this.name = name;
  this.url = `assets/${url}`;
  this.clicks = 0;
  this.views = 0;
}

allProducts.push(new Product('bag', 'bag.jpg'));
allProducts.push(new Product('banana', 'banana.jpg'));
allProducts.push(new Product('bathroom', 'bathroom.jpg'));
allProducts.push(new Product('boots', 'boots.jpg'));
allProducts.push(new Product('breakfast', 'breakfast.jpg'));
allProducts.push(new Product('bubblegum', 'bubblegum.jpg'));
allProducts.push(new Product('chair', 'chair.jpg'));
allProducts.push(new Product('cthulhu', 'cthulhu.jpg'));
allProducts.push(new Product('dog-duck', 'dog-duck.jpg'));
allProducts.push(new Product('dragon', 'dragon.jpg'));
allProducts.push(new Product('pen', 'pen.jpg'));
allProducts.push(new Product('pet-sweep', 'pet-sweep.jpg'));
allProducts.push(new Product('scissors', 'scissors.jpg'));
allProducts.push(new Product('shark', 'shark.jpg'));
allProducts.push(new Product('sweep', 'sweep.png'));
allProducts.push(new Product('tauntaun', 'tauntaun.jpg'));
allProducts.push(new Product('unicorn', 'unicorn.jpg'));
allProducts.push(new Product('water-can', 'water-can.jpg'));
allProducts.push(new Product('wine-glass', 'wine-glass.jpg'));


// pure functions that return new values
function generateImageIndex() {
  return Math.floor(Math.random() * allProducts.length);
}
function generateUniqueRandomImage() {
  let index = generateImageIndex();
  if (currentProducts.includes(index)) {
    index = generateImageIndex();
  }
  return index;
}
// returns 3 index values that are unique, and not in currentProducts
function generateUniqueImages() {

  let index1 = generateUniqueRandomImage();
  let index2 = generateUniqueRandomImage();
  let index3 = generateUniqueRandomImage();

  // can we generate new index values that don't match
  return [index1, index2, index3];
}

function renderProducts() {

  // currently render elements
  let img1 = document.getElementById('img1');
  let img2 = document.getElementById('img2');
  let img3 = document.getElementById('img3');

  let [index1, index2, index3] = generateUniqueImages();

  while(
    index1 === index2 ||
    index2 === index3 ||
    index1 === index3
  ) {
    [index1, index2, index3] = generateUniqueImages();
  }

  // we should have 3 unique values
  img1.src = allProducts[index1].url;
  img2.src = allProducts[index2].url;
  img3.src = allProducts[index3].url;

  currentProducts[0] = index1;
  currentProducts[1] = index2;
  currentProducts[2] = index3;
  console.log(currentProducts, allProducts);
}

// render initial products
renderProducts();


// assign event listeners
productImageEls.addEventListener('click', function() {
  renderProducts();
});
