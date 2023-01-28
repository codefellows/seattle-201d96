/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tBodyElement = document.querySelector('tbody');
  const trElement = tBodyElement.querySelectorAll('tr')
  tBodyElement.innerText = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tableBody = document.querySelector('tbody');

  // TODO: Iterate over the items in the cart
  for (let cartItem of state.cart.items){
    // TODO: Create a TR
    const tr = document.createElement('tr');
    const tdQuantity = document.createElement('td');
    const tdItem = document.createElement('td');

    const tdDelete = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'remove';
    deleteButton.setAttribute('id', state.cart.items.indexOf(cartItem));
    tdDelete.appendChild(deleteButton);

    tdItem.innerText = cartItem.product.name;
    tdQuantity.innerText = cartItem.quantity;
    tr.appendChild(tdDelete);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdItem);
    tableBody.appendChild(tr);

  }

}

function removeItemFromCart(event) {

  state.cart.removeItem(event.target.id);
  console.log('event ID ----->', event.target.id)
  console.log(state.cart);

  state.cart.saveToLocalStorage();

  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
