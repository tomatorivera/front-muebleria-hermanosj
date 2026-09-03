import { getProducts } from "./data/productos.js";

async function cargarProductos() {

    const contenedor = document.getElementById("contenedor-destac");

    try {
        const productos = await getProducts();

        productos.forEach(producto => {

            const article = document.createElement("article");
            article.classList.add("producto");
            article.innerHTML = `
                <img src="${producto.image}" alt="${producto.name}">
                
                <h3>${producto.name}</h3>
                <p>Precio: ${producto.price}</p>
                <a href="#">Ver producto</a>
                `;

                contenedor.appendChild(article);
            });
            
        } catch (error) {
            console.error(error);
        }
}
    
await cargarProductos();
    
