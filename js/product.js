
import { getProductById } from "./interfaces/products.js";
import { addProductToCart } from "./interfaces/cart.js";
import { actualizarBadge } from "./badge.js";

const page = document.getElementById("product-page");

document.addEventListener("DOMContentLoaded", () => {
  // Obtengo el id del producto a mostrar desde la URL
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
  const titulo = document.querySelector('#titulo-producto');
  titulo.textContent = product.name;
  const imagen = document.querySelector('#image-product');
  imagen.src= product.image;
  imagen.alt=product.name;
  const descripcion = document.querySelector('#description-product');
  descripcion.textContent = product.description;
  const precio = document.querySelector('#price-product');
  precio.textContent = `$ ${product.price}`;
  
  carrito.addEventListener('click', function () {
    addProductToCart(product);
    actualizarBadge();
  });

  const tabla = document.querySelector("#especificaciones");
  product.details.forEach((detail) => {
    const row = document.createElement("tr");
    const titleCell = document.createElement("th");
    titleCell.classList.add('th');
    titleCell.textContent = `${detail.title}: `;
    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = detail.description;
    row.append(titleCell,descriptionCell);
    tabla.appendChild(row);
  });
  
}

function renderNotFound() {
 document.getElementById('not-found').style.display = "block";
}
