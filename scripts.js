// Load products from products.json and render
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector(".products");

    products.forEach(product => {
      // WhatsApp link with pre-filled message + image link
      const whatsappMessage = `I am interested in the ${product.name} priced at ${product.price}. Here’s the product: ${window.location.origin}/${product.image}`;
      const whatsappLink = `https://wa.me/254733569297?text=${encodeURIComponent(whatsappMessage)}`;

      // Wrap the whole card inside the <a>
      const card = document.createElement("a");
      card.href = whatsappLink;
      card.target = "_blank";
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <div class="buy-btn">Contact Us</div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading products:", error));
