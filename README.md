# AmazonClone
# 🛒 Amazon Clone - Frontend E-Commerce UI

A static, front-end-only clone of Amazon's homepage and product browsing experience, built with **vanilla HTML, CSS, and JavaScript** - no frameworks, no build step, no dependencies. Features a rotating hero banner, category-based product browsing across 8 departments, and a fully functional shopping cart powered by `localStorage`.

## ✨ Features

- **Responsive navbar** - search bar, delivery location, account menu, returns, and a live cart item-count badge
- **Auto-rotating hero slider** with manual dot navigation and smooth fade transitions
- **8 shoppable categories** -  Health & Personal Care, Home, Digital Gadgets, Décor, Beauty, Pets, Toys, and Fashion - 60+ products total
- **Dynamic product grid** - every product card (image, star rating, review count, price, MRP, discount %, delivery estimate, spec tags) renders from a single JS data object
- **Persistent shopping cart**
  - Add to cart, remove items, increment/decrement quantity
  - Cart state stored in `localStorage` - survives page reloads and navigation between pages
  - Live cart badge + slide-out sidebar with running total
  - Toast notification on add-to-cart
- **Zero dependencies** - just open `index.html` in a browser

## 🗂️ Project Structure
-index.html      # Homepage - hero slider, category grid, navbar, footer
- style.css       # Global styles (navbar, hero, cart sidebar, footer)
-script.js       # Cart logic (localStorage), hero slider, nav wiring
-Product.html    # Product listing page template (driven by ?category=)
- Product.css     # Product grid + card styles
- Product.js      # Product database (8 categories) + card render logic

## 🧩 How It Works

- `index.html` renders 8 category tiles (`.box[data-category]`). Clicking **Shop Now** navigates to `product.html?category=<name>`.
- `Product.js` reads the `category` query param, looks it up in the `PRODUCTS` object, and renders a card per item using template literals.
- `script.js` owns all cart state: `getCart()` / `saveCart()` read and write `localStorage["amazonCart"]`, while `addToCart()`, `removeFromCart()`, and `changeQty()` keep the navbar badge and sidebar in sync — across both pages, since `localStorage` is shared.



https://github.com/user-attachments/assets/0463a7b0-d302-4e56-88a4-0c7b22010abb







This is a fan-made clone built for learning and portfolio purposes only. It is **not affiliated with, endorsed by, or connected to Amazon.com, Inc.** in any way. All trademarks belong to their respective owners.
