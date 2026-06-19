//All product data by category
const PRODUCTS = {
  health: {
    title: "Health & Personal Care",
    subtitle: "Top picks for your wellness routine",
    items: [
      { name: "Himalaya Neem Face Wash", brand: "Himalaya", price: 149, mrp: 200, rating: 4.3, reviews: 12840, delivery: "FREE delivery tomorrow", badge: "25% off", emoji: "<img src='facewash.jpg' width=100px height=170px>", props: ["200ml", "Neem & Turmeric", "Oil Control"] },
      { name: "Dove Body Lotion", brand: "Dove", price: 299, mrp: 350, rating: 4.5, reviews: 8200, delivery: "FREE delivery tomorrow", badge: "15% off", emoji: "<img src='lotion.jpg' width=90px height=175px>", props: ["400ml", "Deep Moisture", "24hr Care"] },
      { name: "Colgate Total Toothpaste", brand: "Colgate", price: 109, mrp: 130, rating: 4.6, reviews: 21000, delivery: "FREE delivery in 2 days", badge: null, emoji: "<img src='colgate.jpg' width=200px height=150px>", props: ["200g", "Anti-bacterial", "Whitening"] },
      { name: "Dettol Hand Sanitizer", brand: "Dettol", price: 89, mrp: 120, rating: 4.7, reviews: 35000, delivery: "FREE delivery tomorrow", badge: "26% off", emoji: "<img src='detol.jpg' width=100px height=175px>", props: ["500ml", "99.9% Germ Kill", "Moisturising"] },
      { name: "Multivitamin Tablets", brand: "HealthKart", price: 699, mrp: 999, rating: 4.2, reviews: 5600, delivery: "FREE delivery in 2 days", badge: "30% off", emoji: "<img src='multivit.jpg' width=210px height=180px>", props: ["60 Tabs", "Vitamin A-Z", "Immunity"] },
      { name: "Sunscreen SPF 50", brand: "Neutrogena", price: 449, mrp: 550, rating: 4.4, reviews: 7800, delivery: "FREE delivery tomorrow", badge: "18% off", emoji: "🌞", props: ["88ml", "SPF 50+", "Water Resistant"] },
      { name: "Gillette Mach3 Razor", brand: "Gillette", price: 249, mrp: 299, rating: 4.5, reviews: 19200, delivery: "FREE delivery tomorrow", badge: null, emoji: "🪒", props: ["3-blade", "Lubrastrip", "Precision Trimmer"] },
      { name: "Whisper Ultra Pads", brand: "Whisper", price: 199, mrp: 250, rating: 4.6, reviews: 28000, delivery: "FREE delivery tomorrow", badge: "20% off", emoji: "🩹", props: ["Pack of 30", "XL Wings", "Soft Cover"] }
    ]
  },
  home: {
    title: "Refresh Your Space",
    subtitle: "Furniture & décor to transform your home",
    items: [
      { name: "Wooden Bookshelf 5-Tier", brand: "Wakefit", price: 3499, mrp: 5999, rating: 4.3, reviews: 3200, delivery: "FREE delivery in 3 days", badge: "42% off", emoji: "📚", props: ["5 Shelves", "Walnut Finish", "Easy Assembly"] },
      { name: "Memory Foam Pillow", brand: "Sleepsia", price: 899, mrp: 1499, rating: 4.4, reviews: 6700, delivery: "FREE delivery tomorrow", badge: "40% off", emoji: "🛌", props: ["Orthopaedic", "Anti-snore", "Washable Cover"] },
      { name: "Non-Stick Cookware Set", brand: "Prestige", price: 1999, mrp: 2999, rating: 4.6, reviews: 11200, delivery: "FREE delivery in 2 days", badge: "33% off", emoji: "🍳", props: ["5-piece", "PTFE Free", "Induction Safe"] },
      { name: "LED Desk Lamp", brand: "Syska", price: 599, mrp: 899, rating: 4.5, reviews: 8900, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "💡", props: ["10W", "Touch Dimmer", "USB Charging"] },
      { name: "Bedsheet Set King Size", brand: "Amazon Basics", price: 799, mrp: 1200, rating: 4.3, reviews: 15000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🛏️", props: ["280TC", "100% Cotton", "4-piece set"] },
      { name: "Air Tight Storage Jars", brand: "Borosil", price: 449, mrp: 699, rating: 4.7, reviews: 22000, delivery: "FREE delivery tomorrow", badge: "36% off", emoji: "🫙", props: ["Set of 6", "Borosilicate Glass", "Airtight Lid"] },
      { name: "Curtain Set 2 Panels", brand: "Story@Home", price: 699, mrp: 1299, rating: 4.2, reviews: 4300, delivery: "FREE delivery in 2 days", badge: "46% off", emoji: "🪟", props: ["7 ft", "Blackout", "Rod Pocket"] },
      { name: "Electric Kettle 1.5L", brand: "Butterfly", price: 699, mrp: 999, rating: 4.5, reviews: 18000, delivery: "FREE delivery tomorrow", badge: "30% off", emoji: "☕", props: ["1.5L", "1500W", "Auto Shut-off"] }
    ]
  },
  gadgets: {
    title: "Digital Gadgets",
    subtitle: "Latest tech at unbeatable prices",
    items: [
      { name: "boAt Airdopes 141", brand: "boAt", price: 1299, mrp: 4490, rating: 4.1, reviews: 95000, delivery: "FREE delivery tomorrow", badge: "71% off", emoji: "🎧", props: ["42hr Playback", "IPX4", "Low Latency"] },
      { name: "Redmi Smart Band Pro", brand: "Redmi", price: 2499, mrp: 3999, rating: 4.3, reviews: 32000, delivery: "FREE delivery tomorrow", badge: "38% off", emoji: "⌚", props: ["1.47\" AMOLED", "14-day Battery", "SpO2"] },
      { name: "Mi 10000mAh Power Bank", brand: "Xiaomi", price: 999, mrp: 1499, rating: 4.4, reviews: 61000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🔋", props: ["10000mAh", "22.5W Fast Charge", "Dual Output"] },
      { name: "Logitech M185 Mouse", brand: "Logitech", price: 599, mrp: 899, rating: 4.5, reviews: 42000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🖱️", props: ["Wireless", "12-month Battery", "Plug & Play"] },
      { name: "TP-Link WiFi Extender", brand: "TP-Link", price: 1299, mrp: 1799, rating: 4.3, reviews: 18500, delivery: "FREE delivery tomorrow", badge: "28% off", emoji: "📡", props: ["300Mbps", "Easy Setup", "Dual Antenna"] },
      { name: "Fire TV Stick 4K", brand: "Amazon", price: 3999, mrp: 5999, rating: 4.5, reviews: 74000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "📺", props: ["4K Ultra HD", "Alexa Voice", "Dolby Atmos"] },
      { name: "Realme Buds Air 3", brand: "Realme", price: 1799, mrp: 3999, rating: 4.2, reviews: 28000, delivery: "FREE delivery in 2 days", badge: "55% off", emoji: "🎵", props: ["ANC", "30hr Total", "Gaming Mode"] },
      { name: "Portronics Bluetooth Speaker", brand: "Portronics", price: 899, mrp: 1999, rating: 4.3, reviews: 14000, delivery: "FREE delivery tomorrow", badge: "55% off", emoji: "🔊", props: ["10W", "IPX5 Waterproof", "10hr Playtime"] }
    ]
  },
  decor: {
    title: "Home Décor",
    subtitle: "Elevate every corner of your home",
    items: [
      { name: "Scented Soy Candles Set", brand: "The Fragrance People", price: 499, mrp: 799, rating: 4.6, reviews: 7200, delivery: "FREE delivery tomorrow", badge: "38% off", emoji: "🕯️", props: ["Set of 3", "50hr Burn Time", "Lavender & Vanilla"] },
      { name: "Macramé Wall Hanging", brand: "Craftlipi", price: 699, mrp: 1299, rating: 4.4, reviews: 3800, delivery: "FREE delivery in 2 days", badge: "46% off", emoji: "🎨", props: ["60cm", "Handmade", "Boho Style"] },
      { name: "Artificial Succulent Plants", brand: "TIED RIBBONS", price: 399, mrp: 599, rating: 4.5, reviews: 11000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🪴", props: ["Set of 6", "Ceramic Pots", "Low Maintenance"] },
      { name: "Photo Frame Collage", brand: "House of Quirk", price: 549, mrp: 999, rating: 4.3, reviews: 5400, delivery: "FREE delivery in 2 days", badge: "45% off", emoji: "🖼️", props: ["8 Frames", "MDF Wood", "Wall Mount"] },
      { name: "Geometric Table Clock", brand: "Ajanta", price: 349, mrp: 599, rating: 4.4, reviews: 6900, delivery: "FREE delivery tomorrow", badge: "42% off", emoji: "🕐", props: ["Quartz", "Silent Movement", "Gold Finish"] },
      { name: "Jute Floor Rug 3x5ft", brand: "indiacraft", price: 799, mrp: 1499, rating: 4.2, reviews: 2800, delivery: "FREE delivery in 3 days", badge: "47% off", emoji: "🟫", props: ["3x5 ft", "Natural Jute", "Handwoven"] },
      { name: "String Fairy Lights 10m", brand: "Blaze On", price: 249, mrp: 499, rating: 4.6, reviews: 19000, delivery: "FREE delivery tomorrow", badge: "50% off", emoji: "✨", props: ["10m 100 LEDs", "Warm White", "USB Powered"] },
      { name: "Vase Set Ceramic", brand: "Random Studio", price: 699, mrp: 1199, rating: 4.5, reviews: 4100, delivery: "FREE delivery in 2 days", badge: "42% off", emoji: "🏺", props: ["Set of 3", "Minimalist Design", "Matte Finish"] }
    ]
  },
  beauty: {
    title: "Beauty Picks",
    subtitle: "Top-rated beauty & skincare products",
    items: [
      { name: "Maybelline Fit Me Foundation", brand: "Maybelline", price: 449, mrp: 599, rating: 4.3, reviews: 17800, delivery: "FREE delivery tomorrow", badge: "25% off", emoji: "💄", props: ["30ml", "SPF 18", "Natural Finish", "20 Shades"] },
      { name: "Lakme Eyeconic Kajal", brand: "Lakme", price: 199, mrp: 280, rating: 4.5, reviews: 31000, delivery: "FREE delivery tomorrow", badge: "29% off", emoji: "👁️", props: ["0.35g", "24hr Stay", "Smudge Proof"] },
      { name: "Nykaa Skin Secrets Face Mask", brand: "Nykaa", price: 299, mrp: 499, rating: 4.4, reviews: 8900, delivery: "FREE delivery in 2 days", badge: "40% off", emoji: "🎭", props: ["Pack of 5", "Hydrating", "No Parabens"] },
      { name: "L'Oreal Hair Fall Repair Shampoo", brand: "L'Oreal", price: 349, mrp: 450, rating: 4.3, reviews: 24000, delivery: "FREE delivery tomorrow", badge: "22% off", emoji: "🧴", props: ["650ml", "Anti-Hairfall", "Keratin"] },
      { name: "Plum Vitamin C Serum", brand: "Plum", price: 599, mrp: 895, rating: 4.5, reviews: 12300, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🌟", props: ["15% Vit C", "15ml", "Brightening"] },
      { name: "Biotique Bio Sunscreen SPF40", brand: "Biotique", price: 179, mrp: 250, rating: 4.2, reviews: 9100, delivery: "FREE delivery tomorrow", badge: "28% off", emoji: "☀️", props: ["120ml", "SPF 40", "Ayurvedic"] },
      { name: "Swiss Beauty Highlighter Palette", brand: "Swiss Beauty", price: 349, mrp: 699, rating: 4.4, reviews: 5600, delivery: "FREE delivery in 2 days", badge: "50% off", emoji: "✨", props: ["6 Shades", "Long Lasting", "Buildable"] },
      { name: "Vaseline Intensive Care Lotion", brand: "Vaseline", price: 259, mrp: 345, rating: 4.6, reviews: 41000, delivery: "FREE delivery tomorrow", badge: "25% off", emoji: "💧", props: ["400ml", "Deep Moisture", "Cocoa Radiant"] }
    ]
  },
  pets: {
    title: "Pet Supplies",
    subtitle: "Everything your furry friend needs",
    items: [
      { name: "Pedigree Adult Dry Dog Food", brand: "Pedigree", price: 799, mrp: 1099, rating: 4.5, reviews: 28000, delivery: "FREE delivery tomorrow", badge: "27% off", emoji: "🐕", props: ["3kg", "Chicken & Veg", "All Breeds"] },
      { name: "Whiskas Tuna Cat Food", brand: "Whiskas", price: 549, mrp: 699, rating: 4.4, reviews: 14500, delivery: "FREE delivery tomorrow", badge: "21% off", emoji: "🐈", props: ["1.2kg", "Tuna Flavour", "Adult Cats"] },
      { name: "Pet Grooming Brush", brand: "Hertzko", price: 699, mrp: 1299, rating: 4.6, reviews: 9800, delivery: "FREE delivery tomorrow", badge: "46% off", emoji: "🪮", props: ["Self-Cleaning", "For Dogs & Cats", "Anti-scratch"] },
      { name: "Dog Chew Toy Set", brand: "KONG", price: 449, mrp: 699, rating: 4.5, reviews: 6700, delivery: "FREE delivery in 2 days", badge: "36% off", emoji: "🦴", props: ["Set of 4", "Natural Rubber", "Dental Health"] },
      { name: "Automatic Pet Water Fountain", brand: "PETKIT", price: 1499, mrp: 2499, rating: 4.3, reviews: 4200, delivery: "FREE delivery tomorrow", badge: "40% off", emoji: "💧", props: ["2L", "3-Stage Filter", "Ultra Quiet"] },
      { name: "Cat Litter Tray with Lid", brand: "Trixie", price: 899, mrp: 1499, rating: 4.4, reviews: 5300, delivery: "FREE delivery in 2 days", badge: "40% off", emoji: "🪣", props: ["Large Size", "Odour Control", "Easy Clean"] },
      { name: "Pet Carrier Bag", brand: "Lal Pet", price: 999, mrp: 1799, rating: 4.3, reviews: 3100, delivery: "FREE delivery in 2 days", badge: "44% off", emoji: "👜", props: ["Airline Approved", "Mesh Ventilation", "Up to 8kg"] },
      { name: "Dog Collar with ID Tag", brand: "Petisco", price: 349, mrp: 599, rating: 4.5, reviews: 7600, delivery: "FREE delivery tomorrow", badge: "42% off", emoji: "🏷️", props: ["Adjustable", "Reflective", "Personalized Tag"] }
    ]
  },
  toys: {
    title: "New Arrivals in Toys",
    subtitle: "Fun & educational toys for every age",
    items: [
      { name: "LEGO Classic Bricks Set", brand: "LEGO", price: 1499, mrp: 2199, rating: 4.7, reviews: 19000, delivery: "FREE delivery tomorrow", badge: "32% off", emoji: "🧱", props: ["500 Pieces", "Age 4+", "Creative Play"] },
      { name: "Remote Control Car", brand: "Webby", price: 899, mrp: 1999, rating: 4.2, reviews: 8400, delivery: "FREE delivery in 2 days", badge: "55% off", emoji: "🚗", props: ["2.4GHz", "1:18 Scale", "Rechargeable"] },
      { name: "Play-Doh 10-Pack", brand: "Play-Doh", price: 549, mrp: 799, rating: 4.6, reviews: 24000, delivery: "FREE delivery tomorrow", badge: "31% off", emoji: "🎨", props: ["10 Colours", "Non-toxic", "Age 3+"] },
      { name: "Funskool Monopoly", brand: "Funskool", price: 699, mrp: 999, rating: 4.5, reviews: 16500, delivery: "FREE delivery tomorrow", badge: "30% off", emoji: "🎲", props: ["2-8 Players", "Age 8+", "Classic Edition"] },
      { name: "Hot Wheels 20-Car Pack", brand: "Hot Wheels", price: 999, mrp: 1499, rating: 4.7, reviews: 32000, delivery: "FREE delivery tomorrow", badge: "33% off", emoji: "🏎️", props: ["20 Cars", "Die-cast Metal", "1:64 Scale"] },
      { name: "Science Experiment Kit", brand: "Einstein Box", price: 1299, mrp: 1999, rating: 4.5, reviews: 7200, delivery: "FREE delivery in 2 days", badge: "35% off", emoji: "🔬", props: ["50 Experiments", "Age 8-14", "STEM Learning"] },
      { name: "Baby Musical Rattle Set", brand: "Fisher-Price", price: 699, mrp: 999, rating: 4.6, reviews: 11000, delivery: "FREE delivery tomorrow", badge: "30% off", emoji: "🎵", props: ["5-piece Set", "BPA Free", "0-12 Months"] },
      { name: "Rubik's Cube 3x3", brand: "Rubik's", price: 399, mrp: 699, rating: 4.4, reviews: 28000, delivery: "FREE delivery tomorrow", badge: "43% off", emoji: "🟥", props: ["Speed Cube", "Smooth Turning", "Classic Puzzle"] }
    ]
  },
  fashion: {
    title: "Trendy Fashion",
    subtitle: "Style that speaks — shop the latest looks",
    items: [
      { name: "Men's Slim Fit Shirt", brand: "Amazon Brand - Symbol", price: 499, mrp: 999, rating: 4.2, reviews: 14200, delivery: "FREE delivery tomorrow", badge: "50% off", emoji: "👔", props: ["Slim Fit", "Cotton Blend", "S-3XL"] },
      { name: "Women's Kurti Floral Print", brand: "Libas", price: 599, mrp: 1299, rating: 4.4, reviews: 22000, delivery: "FREE delivery tomorrow", badge: "54% off", emoji: "👗", props: ["Rayon", "XS-3XL", "Machine Wash"] },
      { name: "Men's Running Shoes", brand: "ASIAN", price: 699, mrp: 1499, rating: 4.1, reviews: 31000, delivery: "FREE delivery tomorrow", badge: "53% off", emoji: "👟", props: ["EVA Sole", "Sizes 6-11", "Lightweight"] },
      { name: "Women's Handbag", brand: "Lavie", price: 999, mrp: 2499, rating: 4.3, reviews: 8700, delivery: "FREE delivery tomorrow", badge: "60% off", emoji: "👜", props: ["Faux Leather", "3 Compartments", "Multiple Colors"] },
      { name: "Men's Slim Jeans", brand: "Roadster", price: 799, mrp: 1599, rating: 4.3, reviews: 18000, delivery: "FREE delivery tomorrow", badge: "50% off", emoji: "👖", props: ["Slim Fit", "Stretch Fabric", "28-38 Waist"] },
      { name: "Women's Sports Leggings", brand: "HRX by Hrithik Roshan", price: 699, mrp: 1399, rating: 4.5, reviews: 12400, delivery: "FREE delivery tomorrow", badge: "50% off", emoji: "🩲", props: ["4-Way Stretch", "Moisture Wicking", "XS-XL"] },
      { name: "Stainless Steel Watch", brand: "Fastrack", price: 1299, mrp: 2495, rating: 4.4, reviews: 9800, delivery: "FREE delivery tomorrow", badge: "48% off", emoji: "⌚", props: ["Quartz", "Water Resistant", "Stainless Steel"] },
      { name: "Aviator Sunglasses", brand: "Vincent Chase", price: 549, mrp: 1500, rating: 4.3, reviews: 6200, delivery: "FREE delivery in 2 days", badge: "63% off", emoji: "🕶️", props: ["UV400", "Polarized", "Metal Frame"] }
    ]
  }
};

//Read category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "health";
const data = PRODUCTS[category] || PRODUCTS["health"];

//Set page titles
document.title = data.title + " – Amazon";
document.getElementById("page-title").textContent = data.title;
document.getElementById("page-subtitle").textContent = data.subtitle;
document.getElementById("breadcrumb-category").textContent = "/ " + data.title;

//Star renderer
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

//Render products
function renderProducts() {
  const grid = document.getElementById("product-grid");
  const cart = JSON.parse(localStorage.getItem("amazonCart") || "[]");

  grid.innerHTML = data.items.map((p, i) => {
    const inCart = cart.some(c => c.name === p.name);
    return `
    <div class="product-card">
      <div class="product-card-img">${p.emoji}</div>
      <div class="product-card-body">
        <div class="product-card-name">${p.name}</div>
        <div class="product-card-brand">by ${p.brand}</div>
        <div class="product-stars">
          ${renderStars(p.rating)}
          <span>(${p.reviews.toLocaleString("en-IN")})</span>
        </div>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ""}
        <div class="product-price-row">
          <div class="product-price"><sup>₹</sup>${p.price.toLocaleString("en-IN")}</div>
          <div class="product-mrp">₹${p.mrp.toLocaleString("en-IN")}</div>
          <div class="product-discount">${Math.round((1 - p.price/p.mrp)*100)}% off</div>
        </div>
        <div class="product-delivery">🚚 ${p.delivery}</div>
        <div class="product-props">
          ${p.props.map(t => `<span class="prop-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="product-card-footer">
        <button class="add-to-cart-btn ${inCart ? "added" : ""}"
          onclick="handleAdd(this, '${p.name.replace(/'/g,"\\'")}', ${p.price})"
        >${inCart ? "✓ Added" : "Add to Cart"}</button>
      </div>
    </div>
    `;
  }).join("");
}

//Handle add to cart
function handleAdd(btn, name, price) {
  addToCart(name, price);          // from script.js
  btn.textContent = "✓ Added";
  btn.classList.add("added");
}

//Init
renderProducts();