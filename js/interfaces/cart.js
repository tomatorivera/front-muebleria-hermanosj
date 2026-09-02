import { getProducts } from './products.js';

const STORAGE_KEY = 'cart'

// Estructura del objeto carrito:
// ------------------------------
//
// {
//   items: array[] = [
//     {
//       product: producto con formato en products.js,
//       quantity: number,
//     },
//   ]
// }
//
// ------------------------------

/**
 * Función de uso interno para guardar el carrito en el localStorage
 * 
 * @param {array[]} cart 
 */
function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

/**
 * Obtiene los datos del carrito actual
 * 
 * @returns {array[]}
 */
export function getCart() {
  const cartJson = localStorage.getItem(STORAGE_KEY);

  if (!cartJson)
    return [];

  return JSON.parse(cartJson);
}

/**
 * Obtiene la cantidad actual de un producto en el carrito
 * 
 * @param {string} productId - id del producto
 * @returns {number}
 */
export function getCurrentQuantity(productId) {
  const cart = getCart();
  const productIndex = cart.findIndex((item) => item.product.id === productId);

  if (productIndex === -1)
    return 0;

  return cart[productIndex].quantity;
}

/**
 * Añade un producto al carrito
 * 
 * @param {*} product - producto a agregar
 */
export function addProductToCart(product) {
  const cart = getCart();
  const productIndex = cart.findIndex(item => item.product.id === product.id);

  if (productIndex === -1)
  {
    cart.push({
      product,
      quantity: 1
    });
  }
  else
  {
    cart[productIndex].quantity++;
  }

  saveCart(cart);
}

/**
 * Remueve un producto del carrito
 * 
 * @param {string} productId - id del producto a eliminar
 */
export function removeProductFromCart(productId) {
  const cart = getCart();
  const productIndex = cart.findIndex((item) => item.product.id === productId);

  if (productIndex === -1)
    return;

  saveCart(
    cart.filter((item) => item.product.id !== productId)
  );
}

/**
 * Actualiza la cantidad de un producto en el carrito, si la cantidad llega a cero
 * o menor, se elimina directamente
 * 
 * @param {number} productId - ID del producto a actualizar
 * @param {number} quantity  - nueva cantidad del producto
 */
export function updateProductQuantity(productId, quantity) {
  const cart = getCart();
  const productIndex = cart.findIndex((item) => item.product.id === productId);

  if (productIndex === -1)
    return;

  if (quantity < 1) {
    removeProductFromCart(productId)
    return;
  }

  saveCart(
    cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item,
    ),
  );
}

/**
 * Limpia los productos en el carrito
 */
export function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
}