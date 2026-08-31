/* ============================================
   HERMANOS JOTA — Carrito de compras
   El carrito es un array de productos:
   [{ id, nombre, precio, cantidad }, ...]
   Se guarda en localStorage para que el número
   se mantenga al pasar de una página a otra.
   ============================================ */

const CART_STORAGE_KEY = 'hermanosJotaCarrito';

// Lee el array del carrito desde localStorage
function obtenerCarrito() {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// Guarda el array del carrito y refresca el número en el botón
function guardarCarrito(carrito) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(carrito));
    actualizarBadge();
}

// Suma las cantidades de todos los productos del array
function contarProductos(carrito = obtenerCarrito()) {
    return carrito.reduce((total, item) => total + (item.cantidad || 1), 0);
}

// Agrega un producto. Si ya existe (mismo id), suma la cantidad.
// producto = { id, nombre, precio, cantidad }
function agregarProducto(producto) {
    const carrito = obtenerCarrito();
    const existente = carrito.find((item) => item.id === producto.id);

    if (existente) {
        existente.cantidad = (existente.cantidad || 1) + (producto.cantidad || 1);
    } else {
        carrito.push({ ...producto, cantidad: producto.cantidad || 1 });
    }

    guardarCarrito(carrito);
}

// Quita un producto del array por id
function quitarProducto(id) {
    const carrito = obtenerCarrito().filter((item) => item.id !== id);
    guardarCarrito(carrito);
}

// Cambia la cantidad de un producto puntual
function actualizarCantidad(id, cantidad) {
    const carrito = obtenerCarrito();
    const item = carrito.find((p) => p.id === id);
    if (!item) return;

    if (cantidad <= 0) {
        quitarProducto(id);
        return;
    }

    item.cantidad = cantidad;
    guardarCarrito(carrito);
}

function vaciarCarrito() {
    guardarCarrito([]);
}

// Dibuja/actualiza el número sobre el botón "Carrito"
function actualizarBadge() {
    const boton = document.querySelector('.cart-button, header button');
    if (!boton) return;

    const cantidad = contarProductos();
    let badge = boton.querySelector('.cart-badge');

    if (cantidad === 0) {
        if (badge) badge.remove();
        return;
    }

    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge';
        boton.appendChild(badge);
    }

    badge.textContent = cantidad > 99 ? '99+' : cantidad;
}

document.addEventListener('DOMContentLoaded', actualizarBadge);

// Se expone para poder agregar/quitar productos desde otras páginas
// (por ejemplo, desde el catálogo al tocar "Agregar al carrito")
window.Carrito = {
    agregar: agregarProducto,
    quitar: quitarProducto,
    actualizarCantidad,
    vaciar: vaciarCarrito,
    obtener: obtenerCarrito,
    contar: contarProductos,
};