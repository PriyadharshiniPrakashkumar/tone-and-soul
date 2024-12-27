const products = [
  { name: "Acoustic Guitar", price: 250, image: "images/acoustic_guitar.jpg", added: false },
  { name: "Electric Guitar", price: 300, image: "images/electric_guitar.jpg", added: false },
  { name: "Bass Guitar", price: 200, image: "images/bass_guitar.jpg", added: false },
  { name: "Grand Piano", price: 800, image: "images/grand_piano.jpg", added: false },
  { name: "Keyboard", price: 150, image: "images/keyboard.jpg", added: false },
  { name: "Drum Set", price: 500, image: "images/drum_set.jpg", added: false },
  { name: "Violin", price: 350, image: "images/violin.jpg", added: false },
  { name: "Cello", price: 400, image: "images/cello.jpg", added: false },
  { name: "Trumpet", price: 100, image: "images/trumpet.jpg", added: false },
  { name: "Trombone", price: 120, image: "images/trombone.jpg", added: false },
  { name: "Saxophone", price: 300, image: "images/saxophone.jpg", added: false },
  { name: "Flute", price: 90, image: "images/flute.jpg", added: false },
  { name: "Clarinet", price: 110, image: "images/clarinet.jpg", added: false },
  { name: "Oboe", price: 200, image: "images/oboe.jpg", added: false },
  { name: "French Horn", price: 250, image: "images/french_horn.jpg", added: false },
  { name: "Tuba", price: 400, image: "images/tuba.jpg", added: false },
  { name: "Harmonica", price: 50, image: "images/harmonica.jpg", added: false },
  { name: "Ukulele", price: 70, image: "images/ukulele.jpg", added: false },
  { name: "Banjo", price: 150, image: "images/banjo.jpg", added: false },
  { name: "Mandolin", price: 200, image: "images/mandolin.jpg", added: false },
];

const cart = [];
let totalPrice = 0;

function renderProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button id="btn-${index}" onclick="addToCart(${index})">${product.added ? "Added" : "Add to Cart"}</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(index) {
  const product = products[index];
  if (!product.added) {
    cart.push(product);
    totalPrice += product.price;
    product.added = true;

    document.getElementById(`btn-${index}`).textContent = "Added";
    document.getElementById("view-cart-btn").textContent = `View Cart (${cart.length})`;

    alert(`${product.name} added to cart!`);
  }
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-image">
      <span>${product.name} - $${product.price}</span>
    `;
    cartList.appendChild(cartItem);
  });

  const totalItem = document.createElement("li");
  totalItem.innerHTML = `<strong>Total Price: $${totalPrice}</strong>`;
  cartList.appendChild(totalItem);
}

function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  const productContainer = document.getElementById("product-container");

  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "block";
    productContainer.style.display = "none";
    renderCart();
  } else {
    cartContainer.style.display = "none";
    productContainer.style.display = "flex";
  }
}

function checkout() {
  const orderPage = window.open("", "_self");
  orderPage.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Placed</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to bottom, #1A1F36, #001F54);
          color: #F0F4F8;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        h1 {
          font-size: 2.5rem;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>Your Order is Placed! Thank You</h1>
    </body>
    </html>
  `);

  cart.length = 0;
  totalPrice = 0;
  products.forEach((product) => (product.added = false));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  document.getElementById("checkout-btn").addEventListener("click", checkout);
});
function checkout() {
  const orderPage = window.open("", "_self");
  orderPage.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Placed</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          background: linear-gradient(to bottom, #1A1F36, #001F54);
          color: #F0F4F8;
          font-family: Arial, sans-serif;
          margin: 0;
          overflow: hidden;
        }
        h1 {
          font-size: 2.5rem;
          text-align: center;
          margin: 1rem;
        }
        .fireworks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .firework {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #ff6347;
          border-radius: 50%;
          animation: explode 2s ease-out infinite;
        }
        @keyframes explode {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(3);
            opacity: 0.7;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
        .back-home-btn {
          margin-top: 2rem;
          padding: 0.8rem 1.5rem;
          background-color: #5DA9E9;
          color: #1A1F36;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .back-home-btn:hover {
          background-color: #1A1F36;
          color: #5DA9E9;
          border: 1px solid #5DA9E9;
        }
      </style>
    </head>
    <body>
      <h1>Your Order is Placed! Thank You</h1>
      <div class="fireworks" id="fireworks-container"></div>
      <button class="back-home-btn" onclick="goToHomepage()">Back to Homepage</button>
      <script>
        const fireworksContainer = document.getElementById('fireworks-container');
        const colors = ['#ff6347', '#ffd700', '#32cd32', '#1e90ff', '#9400d3'];
        
        function createFirework() {
          const firework = document.createElement('div');
          firework.className = 'firework';
          firework.style.left = Math.random() * 100 + '%';
          firework.style.top = Math.random() * 100 + '%';
          firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          firework.style.animationDuration = (1 + Math.random() * 2) + 's';
          fireworksContainer.appendChild(firework);
          
          setTimeout(() => firework.remove(), 2000); // Remove after animation ends
        }
        
        setInterval(createFirework, 300); // Create fireworks at intervals

        function goToHomepage() {
          // Ensure redirection to the main page (index.html)
          window.location.href = "index.html";
        }
      </script>
    </body>
    </html>
  `);

  // Reset cart and product state
  cart.length = 0;
  totalPrice = 0;
  products.forEach((product) => (product.added = false));
}
function checkout() {
  const orderPage = window.open("", "_self");
  orderPage.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Placed</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          background: linear-gradient(to bottom, #1A1F36, #001F54);
          color: #F0F4F8;
          font-family: Arial, sans-serif;
          margin: 0;
          overflow: hidden;
        }
        h1 {
          font-size: 2.5rem;
          text-align: center;
          margin: 1rem;
        }
        .fireworks {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .firework {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #ff6347;
          border-radius: 50%;
          animation: explode 2s ease-out infinite;
        }
        @keyframes explode {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(3);
            opacity: 0.7;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
        .back-home-btn {
          margin-top: 2rem;
          padding: 0.8rem 1.5rem;
          background-color: #5DA9E9;
          color: #1A1F36;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .back-home-btn:hover {
          background-color: #1A1F36;
          color: #5DA9E9;
          border: 1px solid #5DA9E9;
        }
      </style>
    </head>
    <body>
      <h1>Your Order is Placed! Thank You</h1>
      <div class="fireworks" id="fireworks-container"></div>
      <button class="back-home-btn" onclick="goToHomepage()">Back to Homepage</button>
      <script>
        const fireworksContainer = document.getElementById('fireworks-container');
        const colors = ['#ff6347', '#ffd700', '#32cd32', '#1e90ff', '#9400d3'];
        
        function createFirework() {
          const firework = document.createElement('div');
          firework.className = 'firework';
          firework.style.left = Math.random() * 100 + '%';
          firework.style.top = Math.random() * 100 + '%';
          firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          firework.style.animationDuration = (1 + Math.random() * 2) + 's';
          fireworksContainer.appendChild(firework);
          
          setTimeout(() => firework.remove(), 2000); // Remove after animation ends
        }
        
        setInterval(createFirework, 300); // Create fireworks at intervals

        function goToHomepage() {
          // Redirect back to the homepage
          window.location.href = "index.html";
        }
      </script>
    </body>
    </html>
  `);

  // Reset cart and product state
  cart.length = 0;
  totalPrice = 0;
  products.forEach((product) => (product.added = false));
}
     