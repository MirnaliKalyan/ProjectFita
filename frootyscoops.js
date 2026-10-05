const cartKey = 'frootyscoops-cart';
const getCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');
const saveCart = (cart) => localStorage.setItem(cartKey, JSON.stringify(cart));

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((element) => { element.textContent = count; });
}

document.querySelectorAll('.add').forEach((button) => button.addEventListener('click', () => {
  const cart = getCart();
  const item = cart.find((entry) => entry.name === button.dataset.name);
  if (item) item.quantity += 1;
  else cart.push({ name: button.dataset.name, price: Number(button.dataset.price), quantity: 1 });
  saveCart(cart);
  updateCartCount();
  button.textContent = 'Added';
  setTimeout(() => { button.textContent = 'Add to cart'; }, 900);
}));

document.querySelectorAll('[data-order-form]').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Frootyscoops enquiry from ' + data.get('name'));
  const body = encodeURIComponent('Name: ' + data.get('name') + '\nPhone: ' + data.get('phone') + '\nEmail: ' + data.get('email') + '\nMessage: ' + data.get('message'));
  window.location.href = 'mailto:sales@frootyscoops.com?subject=' + subject + '&body=' + body;
}));

const cartList = document.querySelector('[data-cart-list]');
if (cartList) {
  const renderCartPage = () => {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartList.innerHTML = cart.length ? cart.map((item, index) => '<div class="cart-row"><div><strong>' + item.name + '</strong><span>Rs. ' + item.price + ' each</span></div><div class="cart-actions"><button type="button" data-decrease="' + index + '">-</button><b>' + item.quantity + '</b><button type="button" data-increase="' + index + '">+</button><strong>Rs. ' + item.price * item.quantity + '</strong><button class="remove" type="button" data-remove="' + index + '">Remove</button></div></div>').join('') : '<div class="empty-cart"><h2>Your cart is waiting.</h2><p>Add a Frootyscoops treat and it will appear here.</p><a class="button" href="frootyscoops-shop.html">Browse treats</a></div>';
    const totalElement = document.querySelector('[data-cart-total]');
    if (totalElement) totalElement.textContent = 'Rs. ' + total;
    updateCartCount();
  };
  cartList.addEventListener('click', (event) => {
    const index = Number(event.target.dataset.increase ?? event.target.dataset.decrease ?? event.target.dataset.remove);
    if (Number.isNaN(index)) return;
    const cart = getCart();
    if (event.target.dataset.increase !== undefined) cart[index].quantity += 1;
    if (event.target.dataset.decrease !== undefined) cart[index].quantity -= 1;
    if (event.target.dataset.remove !== undefined || cart[index].quantity <= 0) cart.splice(index, 1);
    saveCart(cart);
    renderCartPage();
  });
  renderCartPage();
}

updateCartCount();