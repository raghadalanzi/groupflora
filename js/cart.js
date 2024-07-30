// Function to add item to cart
function addToCart(name, price) {
  // Get the current cart from localStorage or create a new cart
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the item has valid name and price before adding
  if (name && price) {
    // Check if item already exists in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    
    if (existingItemIndex > -1) {
      // If item already exists, increment the quantity
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Add the new item to the cart
      cart.push({ name, price, quantity: 1 });
    }
  
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Notify the user that the item has been added
    alert('Item added to cart');
  } else {
    console.error('Invalid item data:', { name, price });
  }
}

// Function to load cart items from localStorage and display them
function loadCartItems() {
  const cartItems = document.getElementById('cartItems');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  cartItems.innerHTML = ''; // Clear previous content

  if (cart.length > 0) {
    const table = document.createElement('table');
    const header = document.createElement('thead');
    header.innerHTML = '<tr><th>Product</th><th>Price</th><th>Quantity</th></tr>';
    table.appendChild(header);
    const body = document.createElement('tbody');
    
    cart.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.name}</td><td>$${item.price}</td><td>${item.quantity || 1}</td>`;
      body.appendChild(row);
    });
    
    table.appendChild(body);
    cartItems.appendChild(table);
  } else {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
  }
}

// Function to clear cart
function clearCart() {
  localStorage.removeItem('cart');
  loadCartItems(); // Reload items to reflect changes
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const clearCartBtn = document.getElementById('clearCartBtn');

  // Load cart items when page loads
  loadCartItems();

  // Event listener for clear cart button
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }
});