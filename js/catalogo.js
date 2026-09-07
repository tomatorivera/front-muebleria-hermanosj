import { getProducts } from "./interfaces/products.js";
import "./badge.js";

const grilla = document.querySelector("#catalog-grid");
const contadorResultados = document.querySelector("#results-count");

/* Los precios vienen como enteros (40000). Intl los formatea a "$ 40.000". */
const formateadorPrecio = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

/**
 * Arma el HTML de una tarjeta de producto.
 *
 * La ruta de image en products.js es relativa a la raíz del sitio, y esta
 * página vive en html/, así que le anteponemos "../" solo acá. El objeto
 * producto no se modifica: si lo tocáramos, el carrito guardaría una ruta
 * distinta según desde qué página se agregó el mueble.
 *
 * @param {object} producto - producto con el formato de products.js
 * @returns {string}
 */
function crearTarjeta(producto) {
  return `
    <li class="product-card">
      <a class="product-link" href="producto.html?id=${producto.id}">
        <img
          class="product-image"
          src="../${producto.image}"
          alt="${producto.name}"
          loading="lazy"
        >
        <div class="product-body">
          <h3 class="product-name">${producto.name}</h3>
          <p class="product-price">${formateadorPrecio.format(producto.price)}</p>
        </div>
      </a>
    </li>
  `;
}

/**
 * Devuelve el texto del contador, en singular o plural.
 *
 * @param {number} cantidad
 * @returns {string}
 */
function textoResultados(cantidad) {
  return cantidad === 1 ? "1 mueble" : `${cantidad} muebles`;
}

/**
 * Dibuja la grilla con los productos recibidos y actualiza el contador.
 *
 * Está exportada para que el buscador pueda volver a dibujar la grilla con
 * la lista ya filtrada, sin repetir la lógica de renderizado.
 *
 * @param {array} productos
 */
export function renderizarProductos(productos) {
  grilla.innerHTML = productos.map(crearTarjeta).join("");
  contadorResultados.textContent = textoResultados(productos.length);
}

/**
 * Envuelve getProducts() en una promesa con demora para simular la espera de
 * un servidor. Sin esto la carga sería instantánea y no habría estado de
 * carga que mostrar.
 *
 * @returns {Promise<array>}
 */
function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProducts()), 600);
  });
}

/**
 * Carga los productos y los muestra en la grilla.
 */
async function iniciarCatalogo() {
  contadorResultados.textContent = "Cargando productos...";

  try {
    const productos = await obtenerProductos();
    renderizarProductos(productos);
  } catch (error) {
    contadorResultados.textContent =
      "No pudimos cargar el catálogo. Probá recargando la página.";
    console.error("Error al cargar los productos:", error);
  }
}

document.addEventListener("DOMContentLoaded", iniciarCatalogo);