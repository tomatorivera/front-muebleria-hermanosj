
import { getProductById } from "./interfaces/products.js";
import { addProductToCart } from "./interfaces/cart.js";

const page = document.getElementById("product-page");

document.addEventListener("DOMContentLoaded", () => {
  const productId = new URLSearchParams(window.location.search).get("id");
  const [product] = getProductById(productId);

  if (!product) {
    renderNotFound();
    return;
  }

  renderProduct(product);
});

function renderProduct(product) {
  document.title = `${product.name} - Mueblería Hermanos Jota`;

  const title = document.createElement("h1");
  title.textContent = product.name;

  const article = document.createElement("article");
  article.className = "product-detail";
  
  const image = document.createElement("img");
  image.src = `../${product.image}`;
  image.alt = `Imagen del producto ${product.name}`;

  const info = document.createElement("section");
  info.className = "product-info";

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = `$ ${(product.price ?? 0).toLocaleString("es-AR")}`;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const specsTitle = document.createElement("h2");
  specsTitle.textContent = "Detalles de fabricación";

  const specs = document.createElement("dl");
  specs.className = "product-specs";

  product.details.forEach((detail) => {
    const row = document.createElement("div");

    const dt = document.createElement("dt");
    dt.textContent = detail.title;

    const dd = document.createElement("dd");
    dd.textContent = detail.description;

    row.append(dt, dd);
    specs.appendChild(row);
  });

  const actions = document.createElement("div");
  actions.className = "product-actions";

  const addButton = document.createElement("button");
  addButton.className = "button button-primary";
  addButton.type = "button";
  addButton.textContent = "Añadir al carrito";

  const cartLink = document.createElement("a");
  cartLink.className = "button button-secondary";
  cartLink.href = "carrito.html";
  cartLink.textContent = "Ver carrito";

  actions.append(addButton, cartLink);

  addButton.addEventListener("click", () => {
    addProductToCart(product);
  });

  info.append(price, description, specsTitle, specs, actions);
  article.append(image, info);
  page.replaceChildren(title, article);
}

function renderNotFound() {
  document.title = "Producto no encontrado - Mueblería Hermanos Jota";

  const heading = document.createElement("section");
  heading.className = "product-heading";

  const eyebrow = document.createElement("p");
  eyebrow.textContent = "Producto";

  const title = document.createElement("h1");
  title.textContent = "Detalle";

  heading.append(eyebrow, title);

  const empty = document.createElement("section");
  empty.className = "product-not-found";

  const emptyTitle = document.createElement("h2");
  emptyTitle.textContent = "No encontramos esa pieza";

  const emptyText = document.createElement("p");
  emptyText.textContent =
    "El enlace puede estar incompleto o el producto ya no forma parte del catálogo.";

  const homeLink = document.createElement("a");
  homeLink.className = "button button-secondary";
  homeLink.href = "../index.html";
  homeLink.textContent = "Volver al inicio";

  empty.append(emptyTitle, emptyText, homeLink);
  page.replaceChildren(title, empty);
}
