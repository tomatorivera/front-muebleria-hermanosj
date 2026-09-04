import { getCart } from "./interfaces/cart.js";

export function actualizarBadge() {
    const boton = document.querySelector('.cart-button');
    if (!boton) return;

    const cantidad = getCart().reduce((total, item) => total + item.quantity, 0);
    let badge = boton.querySelector('.cart-badge');

    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'cart-badge';
        boton.appendChild(badge);
    }

    badge.textContent = cantidad > 99 ? '99+' : cantidad;
}

document.addEventListener('DOMContentLoaded', actualizarBadge);
