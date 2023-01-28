/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    const option = document.createElement('option');
    option.value = state.allProducts[i].name;
    option.innerText = state.allProducts[i].name;
    selectElement.appendChild(option);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event);
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview(event);

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  console.log(state.allProducts)
  for (let product of state.allProducts) {
    if (event.target.items.value === product.name) {
      state.cart.addItem(product, event.target.quantity.value)
    }
  }
  // state.cart.addItem(event.target.items.value, event.target.quantity.value);

  console.log(state.cart)
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  const product = event.target.items.value
  const quantity = event.target.quantity.value

  const cartContents = document.getElementById('cartContents');
  let cartItem = state.cart.items[state.cart.items.length - 1]
  let figureEl = document.createElement('figure');
  let imageEl = document.createElement('img');
  let figCaptionEl = document.createElement('figcaption');
  console.log(cartItem)
  imageEl.src = cartItem.product.filePath;
  console.log(imageEl.src)
  figCaptionEl.innerText = quantity;
  figureEl.appendChild(figCaptionEl);
  figureEl.appendChild(imageEl);
  cartContents.appendChild(figureEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
