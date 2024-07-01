// Dummy function to add items to cart (this would be replaced with actual logic)
function addToCart(itemName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Create new li element for cart item
    const li = document.createElement('li');
    li.textContent = `${itemName} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);

    // Update total price
    let total = parseFloat(cartTotal.textContent.slice(1)); // Remove $ sign and convert to float
    total += price;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Dummy function to place order (this would be replaced with actual order placement logic)
function placeOrder() {
    alert('Your order has been placed!');
    // Clear cart items and total here if needed
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = '$0.00';
}
