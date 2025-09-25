// Load products from products.json and render
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector(".products");

    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button class="buy-btn">Contact Us</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading products:", error));
