import { getCart, getCurrentQuantity, updateProductQuantity, removeProductFromCart, addProductToCart, getCurrentQuantity } from "./interfaces/cart.js"

const emptyCartSection = document.getElementById('empty-cart');
const notEmptyCartSection = document.getElementById('not-empty-cart');
const productList = document.getElementById('product-list');

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
})

function renderCart() {
  const cart = getCart();

  emptyCartSection.style.display = cart.length === 0 ? "flex" : "none";
  notEmptyCartSection.style.display = cart.length > 0 ? "block" : "none"; 

  productList.innerHTML = "";

  if (cart.length > 0) {
    cart.forEach((item) => {
      renderProduct(item.product, item.quantity, productList);
    });

    // Eventos para los botones
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.closest(".cart-item").dataset.productId;
        const currentQuantity = getCurrentQuantity(productId);

        switch (btn.dataset.action) {
          case "increase":
            updateProductQuantity(productId, currentQuantity + 1);
            break;
          case "decrease":
            updateProductQuantity(productId, currentQuantity - 1);
            break;
          case "remove":
            removeProductFromCart(productId);
            break;
        }

        renderCart();
      });
    });
  }
}

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

    <section class="product-info">
      <h3>${product.name}</h3>
      <p class="product-price">
        $ ${((product.price ?? 0) * quantity).toFixed(2)}
      </p>
    </section>

    <section class="product-actions">
      <section
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

        <p class="quantity" aria-live="polite">
          ${quantity}
        </p>

        <button
          class="quantity-button"
          type="button"
          data-action="increase"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </section>
    </section>

    <button
      class="remove-button"
      type="button"
      data-action="remove"
      aria-label="Quitar ${product.name} del carrito"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M9 3h6l1 2h5v2H3V5h5l1-2Zm-3 6h12l-1 10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 9Z"/>
      </svg>
    </button>
  `;

  parent.appendChild(item);
}
