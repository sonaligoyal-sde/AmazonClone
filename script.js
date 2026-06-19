//Cart State (localStorage for cross-page persistence)
function getCart() {
  return JSON.parse(localStorage.getItem("amazonCart") || "[]");
}
function saveCart(cart) {
  localStorage.setItem("amazonCart", JSON.stringify(cart));
}

// DOM References
const cartBadge    = document.getElementById("cart-badge");
const cartSidebar  = document.getElementById("cart-sidebar");
const cartOverlay  = document.getElementById("cart-overlay");
const cartItemsEl  = document.getElementById("cart-items");
const cartTotalEl  = document.getElementById("cart-total");
const cartBtn      = document.getElementById("cart-btn");
const cartCloseBtn = document.getElementById("cart-close");
const continueBtn  = document.getElementById("continue-shopping");
const toastEl      = document.getElementById("toast");
const backToTop    = document.getElementById("back-to-top");

// Open / Close Sidebar
function openCart()  {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
  renderCart();
}
function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
}

cartBtn.addEventListener("click", openCart);
cartCloseBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
if (continueBtn) continueBtn.addEventListener("click", closeCart);
if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

//Toast
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2500);
}

//Badge
function updateBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.textContent = total;
}

//Add to Cart
function addToCart(name, price) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price: Number(price), qty: 1 });
  }
  saveCart(cart);
  updateBadge();
  renderCart();
  showToast(`"${name}" added to cart!`);
}

//Remove from Cart
function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateBadge();
  renderCart();
}

//Change Quantity
function changeQty(index, delta) {
  const cart = getCart();
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(cart);
  updateBadge();
  renderCart();
}

//Render Cart Sidebar
function renderCart() {
  const cart = getCart();
  if (!cartItemsEl || !cartTotalEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-cart">🛒 Your cart is empty</p>`;
    cartTotalEl.textContent = "₹0";
    return;
  }

  cartItemsEl.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="item-info">
        <p>${item.name}</p>
        <small>₹${item.price.toLocaleString("en-IN")} each</small>
      </div>
      <div class="item-controls">
        <button class="qty-btn" onclick="changeQty(${i}, -1)">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = "₹" + total.toLocaleString("en-IN");
}

//Wire up category boxes on index.html
document.querySelectorAll(".shop-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const category = btn.closest(".box").dataset.category;
    window.location.href = `product.html?category=${category}`;
  });
});

//Init
updateBadge();
renderCart();
//Hero Slider
(function () {
  const slides = document.querySelectorAll(".slide");
  const dots   = document.querySelectorAll(".dot");
  if (!slides.length) return;
 
  let current = 0;
 
  function goTo(n) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }
 
  // dot click still works
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
 
  // auto-advance every 3.5 seconds
  setInterval(() => goTo(current + 1), 3500);
})();
 