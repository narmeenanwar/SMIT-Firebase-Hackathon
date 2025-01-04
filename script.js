 // Initialize cart
const cart = {
  items: [],
  total: 0,
  discount: 0,
  finalPrice: 0,
};

// Update cart UI
function updateCart() {
  const cartCount = document.querySelector('.cart-count');
  const cartItemsList = document.querySelector('.cart-items');
  const totalPrice = document.querySelector('.total-price');
  const discountElement = document.querySelector('.discount');
  const finalPrice = document.querySelector('.final-price');

  cartCount.textContent = cart.items.length;

  // Update cart items
  cartItemsList.innerHTML = '';
  cart.items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = ` ${item.name} - Rs. ${item.price} x ${item.quantity} <button class="increase" data-name="${item.name}">+</button> <button class="decrease" data-name="${item.name}">-</button> `;
    cartItemsList.appendChild(li);
  });

  // Update total, discount, and final price
  cart.total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cart.discount = cart.total > 1000 ? cart.total * 0.1 : 0; // 10% discount if total > 1000
  cart.finalPrice = cart.total - cart.discount;

  totalPrice.textContent = cart.total;
  discountElement.textContent = cart.discount;
  finalPrice.textContent = cart.finalPrice;
}

// Add item to cart
function addToCart(productName, productPrice) {
  const existingItem = cart.items.find(item => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({ name: productName, price: productPrice, quantity: 1 });
  }
  updateCart();
}

// Increase or decrease quantity
document.querySelector('.cart-items').addEventListener('click', e => {
  if (e.target.classList.contains('increase')) {
    const name = e.target.dataset.name;
    const item = cart.items.find(item => item.name === name);
    if (item) {
      item.quantity += 1;
    }
  } else if (e.target.classList.contains('decrease')) {
    const name = e.target.dataset.name;
    const item = cart.items.find(item => item.name === name);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item) {
      cart.items = cart.items.filter(item => item.name !== name);
    }
  }
  updateCart();
});

// Add "Shop Now" button functionality
document.querySelectorAll('.shop-now').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const productName = product.dataset.name;
    const productPrice = parseInt(product.dataset.price);
    addToCart(productName, productPrice);
  });
});