import { getCart } from "./interfaces/cart.js"

const emptyCartSection = document.getElementById('empty-cart');
const notEmptyCartSection = document.getElementById('not-empty-cart');
const productList = document.getElementById('product-list');

document.addEventListener('DOMContentLoaded', () => {
  const cart = getCart();

  emptyCartSection.style.display = cart.length === 0 
    ? "flex"
    : "none";

  notEmptyCartSection.style.display = cart.length === 0
    ? "none"
    : "block"; 

  if (cart.length > 0)
    cart.forEach(item => {
      renderProduct(item.product, item.quantity, productList);
    });
})

function renderProduct(product, quantity, parent) {
  const item = document.createElement("li");

  item.className = "cart-item";
  item.dataset.productId = product.id;

  item.innerHTML = `
    <img
      class="product-image"
      src="../${product.image}"
      alt="Imagen del producto ${product.name}"
    >

    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-category">
        ${product.category ?? "Muebles"}
      </p>
    </div>

    <div class="product-actions">
      <div
        class="quantity-control"
        aria-label="Cantidad de ${product.name}"
      >
        <button
          class="quantity-button"
          type="button"
          data-action="decrease"
          aria-label="Disminuir cantidad"
        >
          −
        </button>

        <span class="quantity" aria-live="polite">
          ${quantity}
        </span>

        <button
          class="quantity-button"
          type="button"
          data-action="increase"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
    </div>

    <p class="product-price">
      $ ${((product.price ?? 0) * quantity).toFixed(2)}
    </p>

    <button
      class="remove-button"
      type="button"
      data-action="remove"
      aria-label="Quitar ${product.name} del carrito"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M8 8v10m4-10v10m4-10v10M5 6h14m-9-3h4l1 3H9l1-3Zm-4 3 1 14h8l1-14" />
      </svg>
    </button>
  `;

  parent.appendChild(item);
}
