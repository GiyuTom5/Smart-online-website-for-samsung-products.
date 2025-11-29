// script.js for SmartShop

// Global variables
let products = [];
let cart = [];
let reviews = [];
let discountAmount = 0;

// Hardcoded image URLs for products (now 15 products)
const productImages = {
    "Galaxy S25 Ultra": 'images/product1.jpg',
    "Galaxy S25": 'images/product2.jpg',
    "Galaxy S25 FE": 'images/product3.jpg',
    "Galaxy Z Fold 7": 'images/product4.jpg',
    "Galaxy Z Fold 6": 'images/product5.jpg',
    "Galaxy Z Fold 5": 'images/product6.jpg',
    "Galaxy Watch 8": 'images/product7.jpg',
    "Galaxy Watch 5": 'images/product8.jpg',
    "Galaxy Watch 4": 'images/product9.jpg',
    "Galaxy Buds3 Pro": 'images/product10.jpg',
    "Galaxy Buds3": 'images/product11.jpg',
    "Galaxy Buds3 FE": 'images/product12.jpg',
    "Samsung 65W Power Adapter": 'images/product13.jpg',
    "Samsung 45W Power Adapter": 'images/product14.jpg',
    "Samsung 25W Power Adapter": 'images/product15.jpg'
};

// Hardcoded product data (15 products total)
const hardcodedProducts = [
    {
    name: "Galaxy S25 Ultra",
    title: "Galaxy S25 Ultra",
    price: 199999,
    description: "Samsung's most powerful flagship phone featuring a 200MP camera, S Pen support, and cutting-edge AI performance.",
    category: "mobile",
    image: productImages["Galaxy S25 Ultra"],
    rating: { rate: 4.5, count: 120 }
    },
    {
    name: "Galaxy S25",
    title: "Galaxy S25",
    price: 99000,
    description: "Premium smartphone with top-tier performance, advanced AI camera, and stunning Dynamic AMOLED display.",
    category: "mobile",
    image: productImages["Galaxy S25"],
    rating: { rate: 4.7, count: 200 }
    },
    {
    name: "Galaxy S25 FE",
    title: "Galaxy S25 FE",
    price: 73000,
    description: "Affordable flagship with great performance, vibrant display, and long-lasting battery life.",
    category: "mobile",
    image: productImages["Galaxy S25 FE"],
    rating: { rate: 4.3, count: 150 }
    },
    {
    name: "Galaxy Z Fold 7",
    title: "Galaxy Z Fold 7",
    price: 170999,
    description: "Next-gen foldable phone with larger inner display, multitasking features, and enhanced durability.",
    category: "mobile",
    image: productImages["Galaxy Z Fold 7"],
    rating: { rate: 4.4, count: 180 }
    },
    {
    name: "Galaxy Z Fold 6",
    title: "Galaxy Z Fold 6",
    price: 300999,
    description: "Premium foldable smartphone offering sleek design, improved hinge, and immersive dual displays.",
    category: "mobile",
    image: productImages["Galaxy Z Fold 6"],
    rating: { rate: 4.2, count: 140 }
    },
    {
    name: "Galaxy Z Fold 5",
    title: "Galaxy Z Fold 5",
    price: 299999,
    description: "Innovative foldable phone with powerful performance and ultra-thin flexible display.",
    category: "mobile",
    image: productImages["Galaxy Z Fold 5"],
    rating: { rate: 4.0, count: 100 }
    },
    {
    name: "Galaxy Watch 8",
    title: "Galaxy Watch 8",
    price: 27499,
    description: "Smartwatch with advanced health tracking, improved battery, and seamless Galaxy ecosystem integration.",
    category: "watch",
    image: productImages["Galaxy Watch 8"],
    rating: { rate: 4.6, count: 250 }
    },
    {
    name: "Galaxy Watch 5",
    title: "Galaxy Watch 5",
    price: 25999,
    description: "Durable smartwatch offering fitness tracking, heart monitoring, and sleep analysis.",
    category: "watch",
    image: productImages["Galaxy Watch 5"],
    rating: { rate: 4.3, count: 180 }
    },
    {
    name: "Galaxy Watch 4",
    title: "Galaxy Watch 4",
    price: 25000,
    description: "Compact and stylish smartwatch with Wear OS and essential health monitoring features.",
    category: "watch",
    image: productImages["Galaxy Watch 4"],
    rating: { rate: 4.1, count: 160 }
    },
    {
    name: "Galaxy Buds3 Pro",
    title: "Galaxy Buds3 Pro",
    price: 13990,
    description: "High-end wireless earbuds with adaptive noise cancellation and crystal-clear sound quality.",
    category: "airbuds",
    image: productImages["Galaxy Buds3 Pro"],
    rating: { rate: 4.8, count: 300 }
    },
    {
    name: "Galaxy Buds3",
    title: "Galaxy Buds3",
    price: 9999,
    description: "Wireless earbuds with rich sound, long battery life, and comfortable fit for daily use.",
    category: "airbuds",
    image: productImages["Galaxy Buds3"],
    rating: { rate: 4.4, count: 220 }
    },
    {
    name: "Galaxy Buds3 FE",
    title: "Galaxy Buds3 FE",
    price: 8999,
    description: "Feature-packed earbuds with strong bass, ANC, and sleek lightweight design.",
    category: "airbuds",
    image: productImages["Galaxy Buds3 FE"],
    rating: { rate: 4.7, count: 280 }
    },
    {
    name: "Samsung 65W Power Adapter",
    title: "Samsung 65W Power Adapter",
    price: 4499,
    description: "Super-fast charging adapter compatible with multiple Galaxy devices and laptops.",
    category: "charge",
    image: productImages["Samsung 65W Power Adapter"],
    rating: { rate: 4.5, count: 190 }
    },
    {
    name: "Samsung 45W Power Adapter",
    title: "Samsung 45W Power Adapter",
    price: 3999,
    description: "Powerful USB-C charger delivering optimal fast charging for Galaxy phones and tablets.",
    category: "charge",
    image: productImages["Samsung 45W Power Adapter"],
    rating: { rate: 4.2, count: 140 }
    },
    {
    name: "Samsung 25W Power Adapter",
    title: "Samsung 25W Power Adapter",
    price: 1890,
    description: "Compact fast charger ideal for daily use with Samsung smartphones and accessories.",
    category: "charge",
    image: productImages["Samsung 25W Power Adapter"],
    rating: { rate: 4.0, count: 120 }
    }   
];

// Hardcoded review data (with images)
const hardcodedReviews = [
    {
        name: "Tazbih Ahsan",
        comment: "Great products and fast shipping!",
        rating: 5,
        image: "images/review1.jpg"
    },
    {
        name: "Imam Hossain",
        comment: "Excellent customer service.",
        rating: 4,
        image: "images/review2.jpg"
    },
    {
        name: "Hasibul Alam",
        comment: "Highly recommend this store.",
        rating: 5,
        image: "images/review3.jpg"
    }
];

// Load hardcoded products
function fetchProducts() {
    products = hardcodedProducts;
    console.log('Products loaded from code:', products);
    displayProducts(products);
}

// Display products in the container
function displayProducts(productList) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    console.log('Displaying products:', productList.length);
    productList.forEach(product => {
        const card = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card product-card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" loading="lazy" onerror="this.style.display='none'; console.log('Image failed to load for product ${product.name}')">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">BDT: ${product.price}/- TK</p>
                        <p class="card-text">Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
                        <div class="mt-auto">
                            <button class="btn btn-primary me-2" onclick="addToCart('${product.name}')">Add to Cart</button>
                            <button class="btn btn-outline-secondary" onclick="viewDetails('${product.name}')">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Filter products by category
function filterProducts(category) {
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
}

// Sort products by price
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...products];
    if (sortValue === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
    }
    displayProducts(sorted);
}

// Add product to cart
function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    // Show sidebar if it's the first item
    if (cart.length === 1) {
        toggleCartSidebar(true);
    }
}

// Update cart display and calculations
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartBadge = document.getElementById('cartBadge');
    const subtotalEl = document.getElementById('subtotal');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    const sidebar = document.getElementById('cartSidebar');

    cartItems.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center flex-grow-1">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-img me-2" onerror="this.style.display='none'">
                    <div>
                        <strong>${item.title}</strong><br>
                        <small>BDT ${item.price} each</small>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary me-1" onclick="changeQuantity('${item.name}', -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary me-2" onclick="changeQuantity('${item.name}', 1)">+</button>
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
    });

    cartBadge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    subtotalEl.textContent = `BDT: ${subtotal.toFixed(2)}`;
    discountEl.textContent = `BDT: ${discountAmount.toFixed(2)}`;
    const delivery = 60;
    const shipping = 100;
    const total = subtotal + delivery + shipping - discountAmount;
    totalEl.textContent = `= ${total.toFixed(2)}/- TK`;

    // Hide sidebar if cart is empty
    if (cart.length === 0) {
        sidebar.classList.remove('open');
    }
}

// Change quantity in cart
function changeQuantity(productName, delta) {
    const item = cart.find(i => i.name === productName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productName);
        } else {
            updateCart();
        }
    }
}

// Remove item from cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// Toggle cart sidebar
function toggleCartSidebar(forceOpen = false) {
    const sidebar = document.getElementById('cartSidebar');
    if (forceOpen || !sidebar.classList.contains('open')) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

// Apply coupon
function applyCoupon() {
    const code = document.getElementById('couponInput').value;
    if (code === 'DISCOUNT10') {
        discountAmount = (cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.1);
        updateCart();
        alert('Coupon applied!');
    } else {
        alert('Invalid coupon code.');
    }
}

// Remove coupon
function removeCoupon() {
    discountAmount = 0;
    updateCart();
    document.getElementById('couponInput').value = '';
}

// View product details (placeholder)
function viewDetails(productName) {
    const product = products.find(p => p.name === productName);
    alert(`Details: ${product.title}\nDescription: ${product.description}`);
}

// Load hardcoded reviews
function fetchReviews() {
    reviews = hardcodedReviews;
    console.log('Reviews loaded from code:', reviews);
    displayReviews();
}

// Display reviews
function displayReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = '';
    reviews.forEach(review => {
        // Generate star rating (yellow stars out of 5)
        const filledStars = '★'.repeat(Math.floor(review.rating));
        const emptyStars = '☆'.repeat(5 - Math.floor(review.rating));
        const starRating = `<span class="star-rating">${filledStars}${emptyStars}</span>`;

        const card = `
            <div class="col-md-4">
                <div class="review-card">
                    <img src="${review.image}" alt="${review.name}" class="review-img" onerror="this.style.display='none'">
                    <h6>${review.name}</h6>
                    <p>${review.comment}</p>
                    ${starRating}
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    fetchReviews();
});