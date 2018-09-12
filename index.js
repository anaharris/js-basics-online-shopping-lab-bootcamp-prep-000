var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var cartItem ={itemName: item, itemPrice: price};
  cart.push(cartItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var n = cart.length;
  var message = 'In your cart, you have';
  if (n<1) {
    return "Your shopping cart is empty.";
  }
  else if (n===1) {
    return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    
  }
  else {
    for (var i=0; i<n-1; i++) {
      message = message + `${getCart()[i].itemName} at $${cart[i].itemPrice}, `;
      return message + `and ${cart[n].itemName} at $${cart[n].itemPrice}.`;
    }
  }
} 

function total() {
  
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  
}
